import sap from "@/assets/partners/sap.asset.json";
import oracle from "@/assets/partners/oracle.asset.json";
import microsoft from "@/assets/partners/microsoft.asset.json";
import salesforce from "@/assets/partners/salesforce.asset.json";
import aws from "@/assets/partners/aws.asset.json";
import uipath from "@/assets/partners/uipath.asset.json";
import automationAnywhere from "@/assets/partners/automation-anywhere.asset.json";
import freshworks from "@/assets/partners/freshworks.asset.json";
import simetrik from "@/assets/partners/simetrik.asset.json";
import synchro from "@/assets/partners/synchro.asset.json";
import brasoftware from "@/assets/partners/brasoftware.asset.json";
import deloitte from "@/assets/partners/deloitte.asset.json";
import ey from "@/assets/partners/ey.asset.json";
import tcs from "@/assets/partners/tcs.asset.json";
import xcitium from "@/assets/partners/xcitium.asset.json";
import proofpoint from "@/assets/partners/proofpoint.asset.json";
import anthropic from "@/assets/partners/anthropic.asset.json";
import trendai from "@/assets/partners/trendai.asset.json";
import snyk from "@/assets/partners/snyk.asset.json";
import etrust from "@/assets/partners/etrust.asset.json";
import cequence from "@/assets/partners/cequence.asset.json";

type Partner = { name: string; url: string; tone: "light" | "dark" };

/** tone = cor predominante do arquivo do logo:
 *  "dark"  → marca escura/colorida sobre fundo claro (tile claro)
 *  "light" → marca branca com fundo transparente (tile escuro) */
export const partners: Partner[] = [
  { name: "SAP", url: sap.url, tone: "dark" },
  { name: "Oracle", url: oracle.url, tone: "dark" },
  { name: "Microsoft", url: microsoft.url, tone: "dark" },
  { name: "Salesforce", url: salesforce.url, tone: "dark" },
  { name: "AWS", url: aws.url, tone: "dark" },
  { name: "UiPath", url: uipath.url, tone: "dark" },
  { name: "Automation Anywhere", url: automationAnywhere.url, tone: "dark" },
  { name: "Freshworks", url: freshworks.url, tone: "dark" },
  { name: "Anthropic", url: anthropic.url, tone: "light" },
  { name: "TrendAI", url: trendai.url, tone: "light" },
  { name: "Deloitte", url: deloitte.url, tone: "dark" },
  { name: "EY", url: ey.url, tone: "dark" },
  { name: "TCS", url: tcs.url, tone: "dark" },
  { name: "Brasoftware", url: brasoftware.url, tone: "dark" },
  { name: "Synchro", url: synchro.url, tone: "dark" },
  { name: "Simetrik", url: simetrik.url, tone: "dark" },
  { name: "Xcitium", url: xcitium.url, tone: "dark" },
  { name: "Proofpoint", url: proofpoint.url, tone: "light" },
  { name: "Snyk", url: snyk.url, tone: "dark" },
  { name: "eTrust", url: etrust.url, tone: "light" },
  { name: "Cequence", url: cequence.url, tone: "light" },
];

import anthropicBadge from "@/assets/partners/anthropic-badge.asset.json";
import automationHub from "@/assets/clients/automation-hub.asset.json";
import timbro from "@/assets/clients/timbro.asset.json";
import motz from "@/assets/clients/motz.asset.json";
import senac from "@/assets/clients/senac.asset.json";
import gol from "@/assets/clients/gol.asset.json";
import deloitteClient from "@/assets/clients/deloitte-client.asset.json";

export const clients: Partner[] = [
  { name: "GOL", url: gol.url, tone: "dark" },
  { name: "Senac", url: senac.url, tone: "dark" },
  { name: "Deloitte", url: deloitteClient.url, tone: "dark" },
  { name: "Timbro", url: timbro.url, tone: "dark" },
  { name: "Motz", url: motz.url, tone: "dark" },
  { name: "Automation Hub", url: automationHub.url, tone: "dark" },
];

function LogoTile({ partner, alt }: { partner: Partner; alt: string }) {
  return (
    <span
      className={`flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-border p-4 ${
        partner.tone === "light" ? "bg-surface-2" : "bg-white"
      }`}
    >
      <img
        src={partner.url}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="max-h-9 w-auto max-w-[7.5rem] object-contain"
      />
    </span>
  );
}

function Track({ items, reverse = false }: { items: Partner[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div
        className={`flex w-max gap-4 pr-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {loop.map((item, i) => (
          <LogoTile key={`${item.name}-${i}`} partner={item} alt="" />
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  const half = Math.ceil(partners.length / 2);
  return (
    <section
      id="parceiros"
      className="border-y border-border bg-surface py-16 lg:py-24"
      aria-labelledby="parceiros-heading"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Ecossistema Flar
          </span>
          <h2 id="parceiros-heading" className="mt-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Parceiros Estratégicos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Trabalhamos lado a lado com os principais fabricantes e integradores globais de
            tecnologia, automação, inteligência artificial e cibersegurança.
          </p>
        </div>

        <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-white p-4">
          <img
            src={anthropicBadge.url}
            alt="Selo Preferred Services Partner da Claude Partner Network (Anthropic)"
            loading="lazy"
            decoding="async"
            className="h-14 w-auto object-contain"
          />
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <Track items={partners.slice(0, half)} />
        <Track items={partners.slice(half)} reverse />
      </div>

      <ul className="sr-only">
        {partners.map((partner) => (
          <li key={partner.name}>{partner.name}</li>
        ))}
      </ul>
    </section>
  );
}

export function PartnerMarquee() {
  const loop = [...clients, ...clients, ...clients, ...clients];
  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-4 pr-4">
        {loop.map((partner, i) => (
          <LogoTile key={`${partner.name}-${i}`} partner={partner} alt="" />
        ))}
      </div>
    </div>
  );
}

