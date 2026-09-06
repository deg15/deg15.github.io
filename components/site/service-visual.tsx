import { ArrowRight, Braces, Database, Network, Sparkles } from 'lucide-react';

export function ServiceVisual({ kind }: { kind: string }) {
  if (kind === 'datos')
    return (
      <div className="service-visual data-visual" aria-hidden="true">
        <div className="data-sources">
          <span>
            <Database size={16} /> SQL
          </span>
          <span>
            <Braces size={16} /> APIs
          </span>
          <span>
            <Network size={16} /> ERP
          </span>
        </div>
        <div className="data-connector">
          <span />
          <span />
          <span />
        </div>
        <div className="data-core">
          <Database size={28} strokeWidth={1.3} />
          <small>PIPELINE</small>
        </div>
        <ArrowRight className="data-arrow" size={22} />
        <div className="data-output">
          <div className="mini-bars">
            {[30, 55, 42, 80, 62, 100].map((height, i) => (
              <i key={i} style={{ height: height + '%' }} />
            ))}
          </div>
          <span>Una visión común</span>
        </div>
      </div>
    );
  if (kind === 'producto')
    return (
      <div className="service-visual product-visual" aria-hidden="true">
        <div className="mini-window">
          <div className="window-top">
            <span />
            <span />
            <span />
            <i>producto / en construcción</i>
          </div>
          <div className="window-body">
            <div className="window-sidebar">
              <i />
              <i />
              <i />
            </div>
            <div className="window-content">
              <span />
              <div>
                <i />
                <i />
              </div>
              <span />
            </div>
          </div>
        </div>
        <span className="code-stamp">
          <Braces size={20} />
        </span>
      </div>
    );
  return (
    <div className="service-visual ai-visual" aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="ai-core">
        <Sparkles size={30} strokeWidth={1.3} />
      </div>
      <span className="ai-node node-input">Contexto</span>
      <span className="ai-node node-output">Acción</span>
      <span className="ai-dot" />
      <span className="ai-caption mono">CONECTAR → AUTOMATIZAR</span>
    </div>
  );
}
