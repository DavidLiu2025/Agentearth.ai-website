import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Boxes,
  Braces,
  Building2,
  Check,
  ChevronRight,
  CircleDot,
  CloudCog,
  Code2,
  DatabaseZap,
  FileText,
  GitBranch,
  Globe2,
  Handshake,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  PlugZap,
  Radar,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  TimerReset,
  Workflow,
  Zap
} from 'lucide-react';
import './styles.css';

const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Developers', href: '#developers' },
  { label: 'Trust', href: '#trust' },
  { label: 'Resources', href: '#resources' }
];

const proofPoints = [
  { value: '1,300+', label: 'agent-ready tools and services' },
  { value: 'MCP / API / Skill', label: 'native external capability access' },
  { value: 'Runtime-first', label: 'routing, fallback, and observability' }
];

const painPoints = [
  {
    icon: SearchCheck,
    title: 'Service discovery is noisy',
    text: 'Agent teams need to know which services are reliable, available, cost-effective, and relevant to the current task.'
  },
  {
    icon: PlugZap,
    title: 'Integration shapes are fragmented',
    text: 'MCP servers, APIs, Skills, Workflows, Agent Services, enterprise systems, and SaaS tools all expose different auth, schema, and error patterns.'
  },
  {
    icon: TimerReset,
    title: 'Runtime execution is unstable',
    text: 'Timeouts, rate limits, regional reachability, schema drift, and bad results turn external calls into product-level reliability risk.'
  },
  {
    icon: GitBranch,
    title: 'Fallback becomes hard-coded logic',
    text: 'As service count grows, teams end up maintaining brittle selection rules, retries, routing paths, and custom connector behavior.'
  }
];

const platformLayers = [
  {
    eyebrow: 'Agent-side control plane',
    title: 'Agent Gateway',
    icon: Network,
    text: 'A unified entry point for agent teams to register, authenticate, call, meter, and govern external services across multiple capability formats.',
    details: ['Unified invocation', 'Authentication and entitlement', 'Usage metering', 'Connector abstraction']
  },
  {
    eyebrow: 'Execution intelligence',
    title: 'Recommendation Engine',
    icon: Radar,
    text: 'Task intent, tool metadata, semantic matching, and query rewriting help agents select the right service without maintaining brittle keyword rules.',
    details: ['Intent understanding', 'Semantic service matching', 'Tool metadata lake', 'Query rewriting']
  },
  {
    eyebrow: 'Capability governance',
    title: 'Capability Warehouse',
    icon: Boxes,
    text: 'External tools are screened, adapted, standardized, monitored, versioned, and operated as agent-ready capabilities instead of raw endpoints.',
    details: ['Service screening', 'Schema optimization', 'Version compatibility', 'Quality monitoring']
  },
  {
    eyebrow: 'Network and routing layer',
    title: 'X-net',
    icon: Route,
    text: 'An AI-native routing and service scheduling layer for cross-region, multi-service execution paths, designed around task completion rather than static delivery.',
    details: ['Network-state awareness', 'Dynamic routing', 'Service scheduling', 'Cross-region reachability']
  },
  {
    eyebrow: 'Supply-side operations',
    title: 'Service Provider Gateway',
    icon: CloudCog,
    text: 'A provider-side operating layer that standardizes onboarding, hosting, quality operations, and service availability for external capability providers.',
    details: ['Provider onboarding', 'Service standardization', 'Availability operations', 'Capability packaging']
  }
];

const outcomes = [
  {
    icon: Zap,
    title: 'Faster integration',
    text: 'Reduce repeated work across auth, schema handling, error logic, billing, and service onboarding.'
  },
  {
    icon: ShieldCheck,
    title: 'Higher execution reliability',
    text: 'Use service governance, status monitoring, routing, fallback, and result-quality signals to reduce task failure risk.'
  },
  {
    icon: Globe2,
    title: 'Global service reachability',
    text: 'Improve execution paths when users, agent runtime, files, APIs, and SaaS systems sit in different regions.'
  },
  {
    icon: DatabaseZap,
    title: 'Reusable capability intelligence',
    text: 'Turn service metadata, behavior logs, schemas, and performance history into a durable routing and matching advantage.'
  }
];

const solutionCards = [
  {
    icon: Sparkles,
    title: 'Agent Product Teams',
    subtitle: 'For assistants, vertical agents, workflow agents, and AI products moving into real task execution.',
    bullets: [
      'Connect search, data, files, commerce, messaging, and SaaS actions faster.',
      'Reduce connector maintenance as external service count grows.',
      'Improve service selection and fallback during runtime.'
    ]
  },
  {
    icon: Building2,
    title: 'Enterprise AI Teams',
    subtitle: 'For internal agents that need controlled access to enterprise systems and external services.',
    bullets: [
      'Govern access to CRM, ERP, ticketing, databases, file systems, and business APIs.',
      'Capture permissions, service boundaries, status, and invocation traces.',
      'Reduce uncontrolled toolchains created by one-off connectors.'
    ]
  },
  {
    icon: Globe2,
    title: 'Global AI Applications',
    subtitle: 'For AI products serving users across regions while calling distributed services and file sources.',
    bullets: [
      'Route across changing network and service conditions.',
      'Reduce cross-region timeout and reachability risk.',
      'Optimize for task-level completion across multi-service chains.'
    ]
  },
  {
    icon: Layers3,
    title: 'Agent Platforms & Marketplaces',
    subtitle: 'For platforms managing large sets of external tools, MCP servers, workflows, and capabilities.',
    bullets: [
      'Transform tool volume into governed, executable service supply.',
      'Maintain service quality, metadata, schema compatibility, and fallback coverage.',
      'Provide runtime matching beyond manual categories and static directories.'
    ]
  }
];

const integrations = [
  'MCP servers',
  'REST and GraphQL APIs',
  'AI Skills',
  'Workflows',
  'Agent Services',
  'Enterprise systems',
  'SaaS tools',
  'Data providers',
  'Search and retrieval',
  'File services',
  'Commerce actions',
  'Media generation'
];

const trustItems = [
  {
    icon: LockKeyhole,
    title: 'Enterprise access control',
    text: 'Design for API keys, service credentials, entitlement boundaries, and controlled invocation paths.'
  },
  {
    icon: Activity,
    title: 'Execution observability',
    text: 'Track service status, failed calls, retries, fallback behavior, latency, and task-level execution quality.'
  },
  {
    icon: BadgeCheck,
    title: 'Governed capability supply',
    text: 'Screen, adapt, standardize, monitor, and operate external services before they enter agent runtime.'
  }
];

const resourceCards = [
  {
    icon: FileText,
    title: 'Product Overview',
    text: 'A customer-readable explanation of AgentEarth as an external service execution platform for agents.',
    cta: 'Read overview'
  },
  {
    icon: Workflow,
    title: 'Scenario Solutions',
    text: 'Use-case maps for agent products, enterprise AI teams, global AI apps, and tool-heavy platforms.',
    cta: 'Explore scenarios'
  },
  {
    icon: Code2,
    title: 'Developer Docs',
    text: 'Connect through MCP or Skill API, receive tool recommendations, execute with returned schemas, and inspect results.',
    cta: 'Open docs'
  }
];

const metrics = [
  { label: 'Service categories', value: '20+' },
  { label: 'Capability types', value: '5' },
  { label: 'Execution layers', value: 'Full-stack' },
  { label: 'Integration paths', value: 'MCP + API' }
];

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSection />
      <PlatformSection />
      <OutcomesSection />
      <SolutionsSection />
      <DevelopersSection />
      <TrustSection />
      <ResourcesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AgentEarth home">
          <span className="brand-mark">
            <span />
          </span>
          <span className="brand-name">AgentEarth</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="text-link" href="https://www.agentearth.ai/docs">
            Docs
          </a>
          <a className="button button-small button-light" href="#contact">
            Talk to sales
          </a>
        </div>
      </header>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-dark">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <CircleDot size={14} />
            Agent Internet Infra
          </div>
          <h1>The external service execution layer for AI agents.</h1>
          <p className="hero-subtitle">
            AgentEarth helps agent teams discover, connect, govern, route, and reliably execute MCP,
            API, Skill, Workflow, and Agent Service capabilities through one enterprise-grade platform.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Book a platform briefing
              <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#developers">
              View developer path
            </a>
          </div>
          <div className="hero-proof">
            {proofPoints.map((item) => (
              <div key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-panel" aria-label="AgentEarth execution flow preview">
          <div className="panel-top">
            <span>Runtime execution path</span>
            <span className="status-pill">Live routing</span>
          </div>
          <div className="execution-map">
            <div className="map-column">
              <div className="map-node primary-node">Agent Runtime</div>
              <div className="mini-node">Intent</div>
              <div className="mini-node">Context</div>
            </div>
            <div className="map-connector">
              <span />
              <span />
              <span />
            </div>
            <div className="map-column center-column">
              <div className="map-node accent-node">AgentEarth</div>
              <div className="mini-node">Recommend</div>
              <div className="mini-node">Route</div>
              <div className="mini-node">Fallback</div>
            </div>
            <div className="map-connector">
              <span />
              <span />
              <span />
            </div>
            <div className="map-column">
              <div className="map-node">External Services</div>
              <div className="mini-node">MCP</div>
              <div className="mini-node">API</div>
              <div className="mini-node">Workflow</div>
            </div>
          </div>
          <div className="signal-grid">
            {['success rate', 'latency', 'service state', 'cost per task'].map((signal) => (
              <div key={signal}>
                <span>{signal}</span>
                <strong>{signal === 'success rate' ? 'Optimized' : 'Observed'}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section section-light">
      <div className="container">
        <SectionHeading
          eyebrow="Execution bottleneck"
          title="Agents do not fail only because of models. They fail at the external service layer."
          text="When agents move from content generation into real task execution, every service call becomes part of the product experience: discovery, auth, schema, routing, latency, error handling, fallback, and long-term maintenance."
        />
        <div className="pain-grid">
          {painPoints.map((item) => (
            <article className="card pain-card" key={item.title}>
              <IconBox icon={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section id="platform" className="section platform-section section-dark-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Platform architecture"
          title="One execution platform across gateway, recommendation, capability governance, routing, and provider operations."
          text="AgentEarth is not a generic tool marketplace. It is built around the full lifecycle of external capability execution: where services come from, how they are governed, how an agent selects them, how calls are routed, and how failures are handled."
          invert
        />
        <div className="architecture-wrap">
          <div className="architecture-diagram" aria-label="AgentEarth platform architecture">
            <div className="arch-side">
              <span className="arch-label">Agents</span>
              <div className="arch-badge">AI assistant</div>
              <div className="arch-badge">Enterprise agent</div>
              <div className="arch-badge">Workflow agent</div>
            </div>
            <div className="arch-core">
              <div className="core-ring ring-one" />
              <div className="core-ring ring-two" />
              <div className="core-center">
                <Network size={30} />
                <strong>AgentEarth</strong>
                <span>Execution Layer</span>
              </div>
            </div>
            <div className="arch-side">
              <span className="arch-label">Capabilities</span>
              <div className="arch-badge">MCP</div>
              <div className="arch-badge">API</div>
              <div className="arch-badge">SaaS / Data</div>
            </div>
          </div>
          <div className="layer-list">
            {platformLayers.map((layer) => (
              <article className="layer-card" key={layer.title}>
                <div className="layer-card-head">
                  <IconBox icon={layer.icon} />
                  <div>
                    <span>{layer.eyebrow}</span>
                    <h3>{layer.title}</h3>
                  </div>
                </div>
                <p>{layer.text}</p>
                <ul>
                  {layer.details.map((detail) => (
                    <li key={detail}>
                      <Check size={15} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section className="section section-light">
      <div className="container split-section">
        <div>
          <div className="eyebrow eyebrow-dark">
            <LineChart size={14} />
            Business outcome
          </div>
          <h2>Lower cost per successful task, not just lower cost per API call.</h2>
          <p>
            For agent products, the economic unit is task completion. AgentEarth optimizes the
            service layer that determines whether a multi-step external execution chain completes,
            degrades, or fails.
          </p>
          <div className="metric-grid">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="outcome-grid">
          {outcomes.map((item) => (
            <article className="outcome-card" key={item.title}>
              <IconBox icon={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="section solutions-section">
      <div className="container">
        <SectionHeading
          eyebrow="Solutions"
          title="Built for teams whose agents already depend on external services."
          text="AgentEarth becomes valuable when the problem is no longer a single connector, but a growing execution surface across tools, enterprise systems, regions, and service states."
        />
        <div className="solution-grid">
          {solutionCards.map((card) => (
            <article className="card solution-card" key={card.title}>
              <div className="solution-head">
                <IconBox icon={card.icon} />
                <h3>{card.title}</h3>
              </div>
              <p>{card.subtitle}</p>
              <ul>
                {card.bullets.map((bullet) => (
                  <li key={bullet}>
                    <ChevronRight size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevelopersSection() {
  return (
    <section id="developers" className="section developer-section section-dark">
      <div className="container developer-grid">
        <div>
          <div className="eyebrow">
            <TerminalSquare size={14} />
            Developer path
          </div>
          <h2>Connect by MCP or API. Let the platform recommend and execute the right capability.</h2>
          <p>
            AgentEarth keeps the integration surface simple while moving service complexity into the
            execution layer. Agents recommend first, validate schemas, execute through the returned
            endpoint, and continue the task with observed results.
          </p>
          <div className="developer-steps">
            {[
              ['1', 'Send the agent task to recommendation.'],
              ['2', 'Select from tool descriptions, schemas, use cases, and cost signals.'],
              ['3', 'Execute through the returned tool URL with validated parameters.'],
              ['4', 'Use results, metrics, and fallback signals to continue the workflow.']
            ].map(([num, text]) => (
              <div key={num}>
                <strong>{num}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="code-card">
          <div className="code-tabs">
            <span>MCP config</span>
            <span>Skill API</span>
          </div>
          <pre>{`{
  "mcpServers": {
    "agentearth": {
      "type": "http",
      "url": "https://agentearth.ai/mcp-server/",
      "headers": {
        "X-Api-Key": "sk-..."
      }
    }
  }
}`}</pre>
          <div className="code-caption">
            <Braces size={16} />
            Works with MCP-compatible agent runtimes and API-based execution flows.
          </div>
        </div>
      </div>
      <div className="container integration-strip" aria-label="Supported capability types">
        {integrations.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="trust" className="section section-light trust-section">
      <div className="container split-section">
        <div>
          <SectionHeading
            eyebrow="Trust and operations"
            title="Govern the service layer before it reaches production agent runtime."
            text="Enterprise agent execution requires controlled access, clear service boundaries, observability, provider quality operations, and failure handling. AgentEarth is designed as an operations layer, not a public directory."
          />
          <div className="trust-grid">
            {trustItems.map((item) => (
              <article key={item.title}>
                <IconBox icon={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="ops-panel">
          <div className="ops-row">
            <span>Service health</span>
            <strong>Monitored</strong>
          </div>
          <div className="ops-row">
            <span>Fallback path</span>
            <strong>Available</strong>
          </div>
          <div className="ops-row">
            <span>Schema compatibility</span>
            <strong>Governed</strong>
          </div>
          <div className="ops-row">
            <span>Cross-region route</span>
            <strong>Optimized</strong>
          </div>
          <div className="ops-graph" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section id="resources" className="section resources-section">
      <div className="container">
        <SectionHeading
          eyebrow="Resources"
          title="Move from overview to evaluation."
          text="Use AgentEarth when external services already affect task completion rate, user experience, engineering maintenance, or global execution stability."
        />
        <div className="resource-grid">
          {resourceCards.map((resource) => (
            <article className="card resource-card" key={resource.title}>
              <IconBox icon={resource.icon} />
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
              <a href={resource.title === 'Developer Docs' ? 'https://www.agentearth.ai/docs' : '#contact'}>
                {resource.cta}
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="contact" className="section cta-section section-dark">
      <div className="container cta-card">
        <div>
          <span className="eyebrow">Evaluation path</span>
          <h2>Start with one real external-service execution chain.</h2>
          <p>
            The right POC is not a generic sandbox. Choose a task where service discovery,
            integration, routing, fallback, or cross-region reachability already affects completion.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button button-primary" href="mailto:contact@agentearth.ai?subject=AgentEarth%20platform%20briefing">
            Contact sales
            <Handshake size={18} />
          </a>
          <a className="button button-secondary" href="https://www.agentearth.ai/docs">
            Read docs
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="#top" aria-label="AgentEarth home">
            <span className="brand-mark">
              <span />
            </span>
            <span className="brand-name">AgentEarth</span>
          </a>
          <p>
            Agent Internet infrastructure for external capability access, routing, orchestration,
            reliability, and fallback.
          </p>
        </div>
        <div>
          <strong>Platform</strong>
          <a href="#platform">Architecture</a>
          <a href="#developers">Developers</a>
          <a href="#trust">Trust</a>
        </div>
        <div>
          <strong>Solutions</strong>
          <a href="#solutions">Agent products</a>
          <a href="#solutions">Enterprise AI</a>
          <a href="#solutions">Global AI apps</a>
        </div>
        <div>
          <strong>Company</strong>
          <a href="https://www.agentearth.ai/docs">Docs</a>
          <a href="mailto:contact@agentearth.ai">Contact</a>
          <a href="https://www.agentearth.ai/login">Login</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 AgentEarth. All rights reserved.</span>
        <span>Built for agent runtime execution.</span>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, text, invert = false }) {
  return (
    <div className={`section-heading ${invert ? 'invert' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function IconBox({ icon: Icon }) {
  return (
    <div className="icon-box" aria-hidden="true">
      <Icon size={20} strokeWidth={1.8} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
