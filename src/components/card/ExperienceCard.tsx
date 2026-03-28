import { Badge } from '../ui/badge';
import { Experience } from '@/types';
import { Building2, Calendar } from 'lucide-react';
import OnViewAnimation from '../onload-animation/onviewAnimation';

interface ExperienceCardProps {
  data: Experience;
  isLast?: boolean;
  isFirst?: boolean;
}

export function ExperienceCard({ data, isLast = false, isFirst = false }: ExperienceCardProps) {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline Line and Dot */}
      <div className="relative flex flex-col items-center self-stretch">
        {/* Top Line (gradient to dot) */}
        <div
          className="w-px flex-1"
          style={{
            background: isFirst ? 'linear-gradient(180deg, rgba(203,172,249,0.14) 0%, #22d3ee 100%)' : '#22d3ee'
          }}
        />

        {/* Dot - centered */}
        <div className="relative">
          <div className="size-2.5 sm:size-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] z-10 shrink-0" />
          <div className="absolute inset-0 size-2.5 sm:size-4 rounded-full bg-cyan-400 animate-ping opacity-30" />
        </div>

        {/* Bottom Line (solid cyan, no gradient between dots) */}
        <div
          className="w-px flex-1"
          style={{
            background: isLast ? 'linear-gradient(180deg, #22d3ee 0%, rgba(203,172,249,0.14) 100%)' : '#22d3ee'
          }}
        />
      </div>

      {/* Card Content */}
      <OnViewAnimation duration={1} translateY={100}>
        <div
          className="flex-1 rounded-2xl p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 border border-borderColor hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(203,172,249,0.15)] group"
          style={{
            backgroundColor: 'rgba(0, 7, 56, 0.3)',
            marginBottom: isLast ? "0" : "30px"
          }}
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <span
              className="text-xs sm:text-sm flex items-center gap-1.5 text-descColor"
            >
              <Calendar className='size-3 sm:size-4' />
              <span>{data.date}</span>
            </span>
            <div className="flex flex-col items-end gap-1.5">
              <span className="bg-thirtyColor/10 text-thirtyColor border border-thirtyColor/50 text-xs px-2.5 py-1 rounded-md"
              >
                {data.type}
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl xl:text-[30px] tracking-wider mb-1">
              {data.title}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="size-8 sm:size-12 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center border border-borderColor group-hover:border-cyan-400/30 transition-all duration-300 text-descColor">
                <Building2 className='size-4 sm:size-6' />
              </div>
              <span className='text-lg sm:text-xl font-medium text-cyan-400'>{data.corpName}</span>
            </div>
          </div>

          {/* Description */}
          <p
            className="leading-relaxed text-sm sm:text-base text-balance"
            style={{ color: 'var(--color-descColor, #BEC1DD)' }}
          >
            {data.desc}
          </p>

          {/* Key Points */}
          {data.keys.length > 0 && (
            <div className="mt-5">
              <p className='font-medium mb-1 text-sm'>Key achievements:</p>
              <ul className="grid gap-2 sm:gap-1">
                {data.keys.map((key, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2"
                    style={{ color: 'var(--color-descColor, #BEC1DD)' }}
                  >
                    <div className="bg-cyan-400 shrink-0 size-1 sm:size-1.5 rounded-full" />
                    <span className="text-xs sm:text-sm text-descColor/85 leading-3.5 sm:leading-relaxed">{key}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {data.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {data.technologies.map((tech, index) => (
                <Badge
                  key={index + tech}
                  className="px-2! nc1:px-2! xl:px-3! py-1! text-xs ns1:text-xs xl:text-sm"
                // onMouseEnter={() => setHovered(true)}
                // onMouseLeave={() => setHovered(false)}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </OnViewAnimation>
    </div>
  );
}