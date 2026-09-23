import { useEffect, useRef, useState, type FocusEvent, type FormEvent } from "react";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "hotmail.com.br",
  "outlook.com",
  "outlook.com.br",
  "live.com",
  "live.com.br",
  "msn.com",
  "yahoo.com",
  "yahoo.com.br",
  "ymail.com",
  "rocketmail.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "gmx.com",
  "gmx.net",
  "mail.com",
  "zoho.com",
  "yandex.com",
  "yandex.ru",
  "bol.com.br",
  "uol.com.br",
  "terra.com.br",
  "ig.com.br",
  "r7.com",
  "globo.com",
  "globomail.com",
  "zipmail.com.br",
  "oi.com.br",
  "superig.com.br",
  "click21.com.br",
  "pop.com.br",
  "kmail.com.br",
]);

const TRACKING_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

type FieldName = "nome" | "whatsapp" | "email";
type FormErrors = Partial<Record<FieldName, string>>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
  }
}

function pushDataLayer(payload: Record<string, string>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

function formatWhatsapp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validateField(name: FieldName, value: string) {
  const trimmed = value.trim();

  if (name === "nome") {
    return trimmed.length >= 2 ? "" : "Informe seu nome.";
  }

  if (name === "whatsapp") {
    const digits = value.replace(/\D/g, "");
    const ddd = Number(digits.slice(0, 2));
    const isValidLength = digits.length === 10 || digits.length === 11;
    const isValidMobile = digits.length !== 11 || digits[2] === "9";
    return isValidLength && ddd >= 11 && ddd <= 99 && isValidMobile
      ? ""
      : "Confira o número de WhatsApp com DDD.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmed)) return "E-mail inválido.";
  const domain = trimmed.toLowerCase().split("@")[1] || "";
  if (PERSONAL_EMAIL_DOMAINS.has(domain)) {
    return "Precisamos do e-mail do domínio da sua empresa (ex.: nome@suaempresa.com.br).";
  }
  return "";
}

interface LeadFormProps {
  id: string;
  footerText: string;
  compact?: boolean;
}

export function LeadForm({ id, footerText, compact = false }: LeadFormProps) {
  const loadedAt = useRef(Date.now());
  const started = useRef(false);
  const [values, setValues] = useState<Record<FieldName, string>>({
    nome: "",
    whatsapp: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [tracking, setTracking] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const captured: Record<string, string> = {};
    TRACKING_FIELDS.forEach((field) => {
      const value = params.get(field);
      if (value) captured[field] = value;
    });
    setTracking(captured);
  }, []);

  const reportError = (field: FieldName, message: string) => {
    if (!message) return;
    pushDataLayer({ event: "form_error", field });
    if (field === "email" && message.startsWith("Precisamos")) {
      const domain = values.email.trim().toLowerCase().split("@")[1] || "";
      pushDataLayer({ event: "email_bloqueado", domain });
    }
  };

  const validate = (field: FieldName, value = values[field]) => {
    const message = validateField(field, value);
    setErrors((current) => ({ ...current, [field]: message }));
    reportError(field, message);
    return !message;
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    validate(event.target.name as FieldName, event.target.value);
  };

  const handleChange = (field: FieldName, value: string) => {
    if (!started.current && value) {
      started.current = true;
      pushDataLayer({ event: "form_start" });
    }
    const nextValue = field === "whatsapp" ? formatWhatsapp(value) : value;
    setValues((current) => ({ ...current, [field]: nextValue }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: "" }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const form = event.currentTarget;
    const honeypot = new FormData(form).get("observacao_interna");
    if (typeof honeypot === "string" && honeypot.trim()) return;

    const nextErrors: FormErrors = {};
    (Object.keys(values) as FieldName[]).forEach((field) => {
      const message = validateField(field, values[field]);
      if (message) {
        nextErrors[field] = message;
        reportError(field, message);
      }
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const payload = new FormData();
    payload.set("nome", values.nome.trim());
    payload.set("whatsapp", values.whatsapp);
    payload.set("email", values.email.trim().toLowerCase());
    payload.set("observacao_interna", "");
    payload.set("form_loaded_at", String(loadedAt.current));
    Object.entries(tracking).forEach(([key, value]) => payload.set(key, value));

    setSubmitting(true);
    try {
      const response = await fetch("/php/submit.php", {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
          "X-Requested-With": "fetch",
        },
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; redirect?: string; errors?: Record<string, string> }
        | null;

      if (response.ok && result?.ok) {
        pushDataLayer({ event: "generate_lead" });
        window.location.assign(result.redirect || "/obrigado");
        return;
      }

      if (response.status === 422 && result?.errors) {
        const serverErrors: FormErrors = {};
        (Object.keys(values) as FieldName[]).forEach((field) => {
          const message = result.errors?.[field];
          if (message) {
            serverErrors[field] = message;
            pushDataLayer({ event: "form_error", field });
          }
        });
        setErrors(serverErrors);
        return;
      }
      setSubmitError("Não foi possível enviar agora. Tente novamente em instantes.");
    } catch {
      setSubmitError("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      id={id}
      data-lead-form
      onSubmit={handleSubmit}
      noValidate
      className={cn("space-y-5", compact && "mx-auto w-full max-w-xl")}
    >
      <div className="sr-only" aria-hidden="true">
        <Label htmlFor={`${id}-observacao`}>Observação interna</Label>
        <Input
          id={`${id}-observacao`}
          name="observacao_interna"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="form_loaded_at" value={loadedAt.current} />
      {TRACKING_FIELDS.map((field) => (
        <input key={field} type="hidden" name={field} value={tracking[field] || ""} />
      ))}

      <Field
        id={`${id}-nome`}
        label="Nome"
        name="nome"
        type="text"
        placeholder="Seu nome"
        value={values.nome}
        error={errors.nome}
        autoComplete="name"
        onChange={(value) => handleChange("nome", value)}
        onBlur={handleBlur}
      />
      <Field
        id={`${id}-whatsapp`}
        label="WhatsApp"
        name="whatsapp"
        type="tel"
        inputMode="tel"
        placeholder="(11) 99999-9999"
        value={values.whatsapp}
        error={errors.whatsapp}
        autoComplete="tel"
        onChange={(value) => handleChange("whatsapp", value)}
        onBlur={handleBlur}
      />
      <Field
        id={`${id}-email`}
        label="E-mail corporativo"
        name="email"
        type="email"
        inputMode="email"
        placeholder="voce@suaempresa.com.br"
        value={values.email}
        error={errors.email}
        autoComplete="email"
        support="Use o e-mail do domínio da sua empresa."
        onChange={(value) => handleChange("email", value)}
        onBlur={handleBlur}
      />

      {submitError ? (
        <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive-foreground">
          {submitError}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={submitting}
        className="h-auto min-h-12 w-full whitespace-normal rounded-md px-5 py-3 text-base font-bold"
      >
        {submitting ? (
          <>
            <LoaderCircle className="animate-spin" />
            Enviando…
          </>
        ) : (
          "Agendar minha sessão gratuita"
        )}
      </Button>
      <p className="text-center text-sm leading-relaxed text-muted-foreground">{footerText}</p>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  name: FieldName;
  type: string;
  inputMode?: "email" | "tel";
  placeholder: string;
  value: string;
  error?: string;
  autoComplete: string;
  support?: string;
  onChange: (value: string) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
}

function Field({
  id,
  label,
  name,
  type,
  inputMode,
  placeholder,
  value,
  error,
  autoComplete,
  support,
  onChange,
  onBlur,
}: FieldProps) {
  const errorId = `${id}-error`;
  const supportId = `${id}-support`;
  const describedBy = [support ? supportId : "", error ? errorId : ""].filter(Boolean).join(" ");

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        required
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy || undefined}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        className={cn(
          "h-12 rounded-md bg-background px-4 text-base md:text-base",
          error && "border-destructive focus-visible:ring-destructive",
        )}
      />
      {support ? (
        <p id={supportId} className="text-xs text-muted-foreground">
          {support}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-destructive-foreground">
          {error}
        </p>
      ) : null}
    </div>
  );
}