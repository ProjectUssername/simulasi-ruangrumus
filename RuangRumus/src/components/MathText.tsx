import { Fragment, useMemo } from 'react'
import katex from 'katex'
export function Formula({ children, display = false }: { children: string; display?: boolean }) {
  const html = useMemo(
    () =>
      katex.renderToString(children, {
        displayMode: display,
        throwOnError: false,
        trust: false,
        output: 'htmlAndMathml',
        strict: 'warn',
      }),
    [children, display],
  )
  return (
    <span
      className={display ? 'math-display' : 'math-inline'}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
export function MathText({ children }: { children: string }) {
  return (
    <>
      {children
        .split(/(\$[^$]+\$)/g)
        .map((s, i) =>
          s.startsWith('$') && s.endsWith('$') ? (
            <Formula key={i}>{s.slice(1, -1)}</Formula>
          ) : (
            <Fragment key={i}>{s}</Fragment>
          ),
        )}
    </>
  )
}
