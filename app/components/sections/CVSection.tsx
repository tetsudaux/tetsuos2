'use client';

import { DownloadIcon } from '@/app/components/ui/Icons';

export function CVSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="space-y-3 text-base leading-relaxed lg:space-y-4 lg:text-lg lg:leading-relaxed">
        <p>
          <span className="font-bold text-[var(--v-500)]">
            ¡Gracias por interesarte en mi CV!
          </span>
        </p>
        <p className="text-[var(--ink)]">
          He colaborado con equipos de edtech, e-commerce y contenidos. También
          produzco experiencias en Moodle, H5P y Rise y apoyo con HTML/CSS.
        </p>
        <p className="text-[var(--ink)]">
          Si me cuentas tu objetivo, te digo cómo puedo ayudarte y te comparto
          proyectos relevantes.
        </p>
        <p className="text-[var(--ink)]">
          Si quieres ver el detalle en una sola página, toca &quot;Descargar CV&quot;
          aquí abajo. Ahí encontrarás mi experiencia, proyectos y herramientas
          de forma directa.
        </p>
      </div>

      <a
        href="https://drive.google.com/file/d/19Hnd5i7MkiwQXp6t2yzFUJsZ3Jvkn4ju/view"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-hover-lift link-hover inline-flex w-fit items-center gap-3 border-2 border-[var(--v-500)] bg-white px-4 py-3 font-bold text-[var(--v-500)] transition-all hover:bg-[var(--v-500)] hover:text-white lg:px-5 lg:py-4 lg:text-lg"
        style={{ borderRadius: '4px 12px 12px 12px' }}
      >
        <DownloadIcon size={22} />
        <span>Descargar CV</span>
      </a>
    </div>
  );
}
