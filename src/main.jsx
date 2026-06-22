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

const currentPath = window.location.pathname;
const currentPage = currentPath.includes('/zh-cn/')
  ? 'zh-cn'
  : document.documentElement.lang?.toLowerCase().startsWith('zh') || currentPath.includes('/zh/')
    ? 'zh'
    : 'en';

const copy = {
  en: {
    langClass: 'locale-en',
    nav: [
      { label: 'Platform', href: '#platform' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Developers', href: '#developers' },
      { label: 'Trust', href: '#trust' },
      { label: 'Readiness', href: '#readiness' },
      { label: 'Resources', href: '#resources' }
    ],
    header: {
      docs: 'Docs',
      sales: 'Talk to sales',
      languageLabel: '中文',
      languageHref: 'zh/'
    },
    hero: {
      eyebrow: 'Agent Internet Infrastructure',
      title: 'Reliable external service execution for AI agents.',
      titleLines: ['Reliable external', 'service execution', 'for AI agents.'],
      subtitle:
        'AgentEarth gives product and enterprise AI teams one governed execution layer for MCP, API, Skill, Workflow, and Agent Service capabilities: discovery, access, routing, observability, fallback, and provider operations.',
      subtitleLines: null,
      primary: 'Book an execution review',
      secondary: 'See the platform',
      panelTitle: 'Agent execution control plane',
      panelStatus: 'Policy-aware routing',
      columns: {
        agent: ['Agent Runtime', 'Intent', 'Context', 'Policy'],
        platform: ['AgentEarth', 'Recommend', 'Govern', 'Route', 'Fallback'],
        service: ['External Services', 'MCP', 'API', 'Workflow', 'SaaS']
      },
      signals: [
        ['task success', 'Measured'],
        ['service health', 'Observed'],
        ['fallback', 'Available'],
        ['cost per outcome', 'Optimized']
      ],
      proofPoints: [
        { value: '5 layers', label: 'gateway, warehouse, recommendation, routing, provider ops' },
        { value: 'MCP + API', label: 'agent-native and enterprise integration paths' },
        { value: 'Task-level', label: 'success, fallback, latency, and cost observability' }
      ]
    },
    problem: {
      eyebrow: 'Execution bottleneck',
      title: 'Agents do not fail only because of models. They fail at the external service layer.',
      text:
        'When agents move from content generation into real task execution, every service call becomes part of the product experience: discovery, auth, schema, routing, latency, error handling, fallback, and long-term maintenance.',
      cards: [
        {
          icon: SearchCheck,
          title: 'Service discovery is noisy',
          text:
            'Agent teams need to know which services are reliable, available, cost-effective, and relevant to the current task.'
        },
        {
          icon: PlugZap,
          title: 'Integration shapes are fragmented',
          text:
            'MCP servers, APIs, Skills, Workflows, Agent Services, enterprise systems, and SaaS tools all expose different auth, schema, and error patterns.'
        },
        {
          icon: TimerReset,
          title: 'Runtime execution is unstable',
          text:
            'Timeouts, rate limits, regional reachability, schema drift, and bad results turn external calls into product-level reliability risk.'
        },
        {
          icon: GitBranch,
          title: 'Fallback becomes hard-coded logic',
          text:
            'As service count grows, teams end up maintaining brittle selection rules, retries, routing paths, and custom connector behavior.'
        }
      ]
    },
    platform: {
      eyebrow: 'Platform architecture',
      title:
        'One execution platform across gateway, recommendation, capability governance, routing, and provider operations.',
      text:
        'AgentEarth is not a generic tool marketplace. It is built around the full lifecycle of external capability execution: where services come from, how they are governed, how an agent selects them, how calls are routed, and how failures are handled.',
      diagram: {
        leftLabel: 'Agents',
        leftBadges: ['AI assistant', 'Enterprise agent', 'Workflow agent'],
        centerTitle: 'AgentEarth',
        centerText: 'Execution Layer',
        rightLabel: 'Capabilities',
        rightBadges: ['MCP', 'API', 'SaaS / Data']
      },
      layers: [
        {
          eyebrow: 'Agent-side control plane',
          title: 'Agent Gateway',
          icon: Network,
          text:
            'A unified entry point for agent teams to register, authenticate, call, meter, and govern external services across multiple capability formats.',
          details: ['Unified invocation', 'Authentication and entitlement', 'Usage metering', 'Connector abstraction']
        },
        {
          eyebrow: 'Execution intelligence',
          title: 'Recommendation Engine',
          icon: Radar,
          text:
            'Task intent, tool metadata, semantic matching, and query rewriting help agents select the right service without maintaining brittle keyword rules.',
          details: ['Intent understanding', 'Semantic service matching', 'Tool metadata lake', 'Query rewriting']
        },
        {
          eyebrow: 'Capability governance',
          title: 'Capability Warehouse',
          icon: Boxes,
          text:
            'External tools are screened, adapted, standardized, monitored, versioned, and operated as agent-ready capabilities instead of raw endpoints.',
          details: ['Service screening', 'Schema optimization', 'Version compatibility', 'Quality monitoring']
        },
        {
          eyebrow: 'Network and routing layer',
          title: 'X-net',
          icon: Route,
          text:
            'An AI-native routing and service scheduling layer for cross-region, multi-service execution paths, designed around task completion rather than static delivery.',
          details: ['Network-state awareness', 'Dynamic routing', 'Service scheduling', 'Cross-region reachability']
        },
        {
          eyebrow: 'Supply-side operations',
          title: 'Service Provider Gateway',
          icon: CloudCog,
          text:
            'A provider-side operating layer that standardizes onboarding, hosting, quality operations, and service availability for external capability providers.',
          details: ['Provider onboarding', 'Service standardization', 'Availability operations', 'Capability packaging']
        }
      ]
    },
    outcomes: {
      eyebrow: 'Business outcome',
      title: 'Lower cost per successful task, not just lower cost per API call.',
      text:
        'For agent products, the economic unit is task completion. AgentEarth optimizes the service layer that determines whether a multi-step external execution chain completes, degrades, or fails.',
      metrics: [
        { label: 'Service categories', value: '20+' },
        { label: 'Capability types', value: '5' },
        { label: 'Execution layers', value: 'Full-stack' },
        { label: 'Integration paths', value: 'MCP + API' }
      ],
      cards: [
        {
          icon: Zap,
          title: 'Faster integration',
          text: 'Reduce repeated work across auth, schema handling, error logic, billing, and service onboarding.'
        },
        {
          icon: ShieldCheck,
          title: 'Higher execution reliability',
          text:
            'Use service governance, status monitoring, routing, fallback, and result-quality signals to reduce task failure risk.'
        },
        {
          icon: Globe2,
          title: 'Global service reachability',
          text:
            'Improve execution paths when users, agent runtime, files, APIs, and SaaS systems sit in different regions.'
        },
        {
          icon: DatabaseZap,
          title: 'Reusable capability intelligence',
          text:
            'Turn service metadata, behavior logs, schemas, and performance history into a durable routing and matching advantage.'
        }
      ]
    },
    evidence: {
      eyebrow: 'Evaluation evidence',
      title: 'A production agent needs proof at the execution layer, not a longer tool catalog.',
      text:
        'Top enterprise platforms are evaluated by operational control, integration depth, governance, and measurable business outcomes. AgentEarth applies the same standard to external-service execution for agents.',
      cards: [
        {
          value: '01',
          title: 'Task completion before tool count',
          text: 'Measure whether multi-step external actions complete, degrade, or fail. A larger catalog is useful only when it improves successful task outcomes.'
        },
        {
          value: '02',
          title: 'Governance before scale',
          text: 'Bring auth, schema quality, version compatibility, entitlement, service status, and provider quality into one operating model.'
        },
        {
          value: '03',
          title: 'Runtime control before workflow sprawl',
          text: 'Keep agents dynamic while moving service choice, routing, retry, fallback, and observability into a shared execution layer.'
        }
      ]
    },
    solutions: {
      eyebrow: 'Solutions',
      title: 'Built for teams whose agents already depend on external services.',
      text:
        'AgentEarth becomes valuable when the problem is no longer a single connector, but a growing execution surface across tools, enterprise systems, regions, and service states.',
      cards: [
        {
          icon: Sparkles,
          title: 'Agent Product Teams',
          subtitle:
            'For assistants, vertical agents, workflow agents, and AI products moving into real task execution.',
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
          subtitle:
            'For AI products serving users across regions while calling distributed services and file sources.',
          bullets: [
            'Route across changing network and service conditions.',
            'Reduce cross-region timeout and reachability risk.',
            'Optimize for task-level completion across multi-service chains.'
          ]
        },
        {
          icon: Layers3,
          title: 'Agent Platforms & Marketplaces',
          subtitle:
            'For platforms managing large sets of external tools, MCP servers, workflows, and capabilities.',
          bullets: [
            'Transform tool volume into governed, executable service supply.',
            'Maintain service quality, metadata, schema compatibility, and fallback coverage.',
            'Provide runtime matching beyond manual categories and static directories.'
          ]
        }
      ]
    },
    developers: {
      eyebrow: 'Developer path',
      title: 'Connect by MCP or API. Let the platform recommend and execute the right capability.',
      text:
        'AgentEarth keeps the integration surface simple while moving service complexity into the execution layer. Agents recommend first, validate schemas, execute through the returned endpoint, and continue the task with observed results.',
      steps: [
        ['1', 'Send the agent task to recommendation.'],
        ['2', 'Select from tool descriptions, schemas, use cases, and cost signals.'],
        ['3', 'Execute through the returned tool URL with validated parameters.'],
        ['4', 'Use results, metrics, and fallback signals to continue the workflow.']
      ],
      codeTab: 'MCP config',
      codeAlt: 'Skill API',
      codeCaption: 'Works with MCP-compatible agent runtimes and API-based execution flows.',
      integrationsAria: 'Supported capability types',
      integrations: [
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
      ]
    },
    trust: {
      eyebrow: 'Trust and operations',
      title: 'Govern the service layer before it reaches production agent runtime.',
      text:
        'Enterprise agent execution requires controlled access, clear service boundaries, observability, provider quality operations, and failure handling. AgentEarth is designed as an operations layer, not a public directory.',
      cards: [
        {
          icon: LockKeyhole,
          title: 'Enterprise access control',
          text: 'Design for API keys, service credentials, entitlement boundaries, and controlled invocation paths.'
        },
        {
          icon: Activity,
          title: 'Execution observability',
          text:
            'Track service status, failed calls, retries, fallback behavior, latency, and task-level execution quality.'
        },
        {
          icon: BadgeCheck,
          title: 'Governed capability supply',
          text:
            'Screen, adapt, standardize, monitor, and operate external services before they enter agent runtime.'
        }
      ],
      ops: [
        ['Service health', 'Monitored'],
        ['Fallback path', 'Available'],
        ['Schema compatibility', 'Governed'],
        ['Cross-region route', 'Optimized']
      ]
    },
    resources: {
      eyebrow: 'Resources',
      title: 'Evaluation assets for enterprise buyers and agent platform teams.',
      text:
        'Use these materials when external services already affect task completion rate, user experience, engineering maintenance, or global execution stability.',
      cards: [
        {
          icon: FileText,
          title: 'Executive briefing',
          text: 'Category definition, architecture boundary, buyer roles, and where AgentEarth fits in the agent execution stack.',
          cta: 'Request briefing',
          href: '#contact'
        },
        {
          icon: Workflow,
          title: 'Scenario map',
          text: 'Evaluation maps for agent products, enterprise AI teams, global AI apps, and tool-heavy platforms.',
          cta: 'Request scenario map',
          href: '#contact'
        },
        {
          icon: Code2,
          title: 'Integration docs',
          text:
            'Connect through MCP or Skill API, receive recommendations, execute with returned schemas, and inspect results.',
          cta: 'Open docs',
          href: 'https://www.agentearth.ai/docs'
        }
      ]
    },
    readiness: {
      eyebrow: 'Enterprise readiness',
      title: 'What enterprise teams verify before making AgentEarth part of agent runtime.',
      text:
        'The evaluation should prove more than connector coverage. It should show whether external service execution can be governed, observed, routed, and expanded without pushing brittle logic back into every agent application.',
      pillars: [
        {
          icon: ShieldCheck,
          title: 'Security and access control',
          text:
            'Map service permissions, API keys, tenant boundaries, approval flows, and execution policies before expanding service coverage.'
        },
        {
          icon: Activity,
          title: 'Observability and failure analysis',
          text:
            'Trace failed calls, fallback decisions, service health, latency, provider status, and task outcome changes in one execution view.'
        },
        {
          icon: Route,
          title: 'Routing and fallback policy',
          text:
            'Define when an agent should retry, switch providers, use a backup capability, or return a controlled failure state.'
        },
        {
          icon: CloudCog,
          title: 'Provider operations',
          text:
            'Keep service metadata, schema compatibility, version drift, availability, and provider quality under continuous operation.'
        }
      ],
      checklistTitle: 'POC acceptance criteria',
      checklist: [
        'A real task chain with two or more external services is connected.',
        'Current failure modes and maintenance costs are documented before testing.',
        'Completion rate, latency, fallback hit rate, and cost per successful task are measured.',
        'Expansion rules are clear before adding more service categories.'
      ]
    },
    evaluation: {
      eyebrow: 'Deployment path',
      title: 'Start narrow, prove the execution layer, then expand across service categories.',
      text:
        'The best enterprise evaluation is a controlled production-like chain with measurable inputs, service state, fallback behavior, and task-level outcomes.',
      stages: [
        ['01', 'Scope one chain', 'Pick a task that already depends on two or more external services and has visible failure modes.'],
        ['02', 'Normalize service access', 'Connect MCP, API, Workflow, or Agent Service endpoints through a governed entry point.'],
        ['03', 'Measure execution quality', 'Track completion rate, latency, fallback, failed calls, service health, and cost per successful task.'],
        ['04', 'Expand with governance', 'Move from one chain to more service categories once routing and fallback prove value.']
      ],
      outputs: ['Service inventory', 'Fallback model', 'Routing policy', 'Task outcome dashboard']
    },
    cta: {
      eyebrow: 'Evaluation path',
      title: 'Start with one real external-service execution chain.',
      text:
        'The right POC is not a generic sandbox. Choose a task where service discovery, integration, routing, fallback, or cross-region reachability already affects completion.',
      primary: 'Contact sales',
      secondary: 'Read docs',
      mailSubject: 'AgentEarth platform briefing'
    },
    footer: {
      text:
        'Agent Internet infrastructure for external capability access, routing, orchestration, reliability, and fallback.',
      columns: [
        ['Platform', ['Architecture', 'Developers', 'Trust']],
        ['Solutions', ['Agent products', 'Enterprise AI', 'Global AI apps']],
        ['Company', ['Docs', 'Contact', 'Login']]
      ],
      copyright: '© 2026 AgentEarth. All rights reserved.',
      tagline: 'Built for agent runtime execution.'
    }
  },
  zh: {
    langClass: 'locale-zh',
    nav: [
      { label: '平台架构', href: '#platform' },
      { label: '解决方案', href: '#solutions' },
      { label: '开发者', href: '#developers' },
      { label: '信任与治理', href: '#trust' },
      { label: '企业验证', href: '#readiness' },
      { label: '资源', href: '#resources' }
    ],
    header: {
      docs: '文档',
      sales: '联系销售',
      languageLabel: 'EN',
      languageHref: '../'
    },
    hero: {
      eyebrow: 'Agent Internet Infra',
      title: '让 AI agents 稳定执行外部服务调用。',
      titleLines: ['让 AI agents', '稳定执行', '外部服务调用。'],
      subtitle:
        'AgentEarth 为产品团队和企业 AI 团队提供统一的外部服务 execution layer，覆盖 MCP、API、Skill、Workflow 与 Agent Service 的发现、接入、治理、routing、可观测和 fallback。',
      subtitleLines: [
        'AgentEarth 为产品团队和企业 AI 团队提供统一的外部服务 execution layer，',
        '覆盖 MCP、API、Skill、Workflow 与 Agent Service 的发现、接入、治理、',
        'routing、可观测和 fallback。'
      ],
      primary: '预约执行链路评估',
      secondary: '查看平台架构',
      panelTitle: 'Agent execution control plane',
      panelStatus: '策略化 routing',
      columns: {
        agent: ['Agent Runtime', '任务意图', '上下文', '权限策略'],
        platform: ['AgentEarth', '推荐', '治理', 'Route', 'Fallback'],
        service: ['外部服务', 'MCP', 'API', 'Workflow', 'SaaS']
      },
      signals: [
        ['任务完成率', '可衡量'],
        ['服务健康', '可观测'],
        ['Fallback', '可用'],
        ['结果成本', '可优化']
      ],
      proofPoints: [
        { value: '5 层架构', label: 'gateway、能力仓库、推荐、routing、供给侧运营' },
        { value: 'MCP + API', label: '兼容 agent-native 与企业系统接入路径' },
        { value: '任务级指标', label: '成功率、fallback、延迟与成本可观测' }
      ]
    },
    problem: {
      eyebrow: 'Execution bottleneck',
      title: 'agent 的失败不只来自模型，也来自外部服务层。',
      text:
        '当 agent 从内容生成进入真实任务执行，每一次外部服务调用都会成为产品体验的一部分：发现、鉴权、schema、routing、延迟、错误处理、fallback 与长期维护。',
      cards: [
        {
          icon: SearchCheck,
          title: '服务发现噪音高',
          text: 'agent 团队需要判断哪些服务可靠、可用、成本合理，并且真正适合当前任务。'
        },
        {
          icon: PlugZap,
          title: '接入形态碎片化',
          text:
            'MCP、API、Skill、Workflow、Agent Service、企业系统和 SaaS 工具，在鉴权、参数、schema 和错误模型上并不统一。'
        },
        {
          icon: TimerReset,
          title: 'runtime 执行不稳定',
          text: '超时、限流、跨地域可达性、schema 漂移和异常结果，会把外部调用问题放大成产品可靠性风险。'
        },
        {
          icon: GitBranch,
          title: 'fallback 变成硬编码',
          text: '服务数量增长后，团队容易维护脆弱的选择规则、重试逻辑、routing 路径和定制 connector。'
        }
      ]
    },
    platform: {
      eyebrow: 'Platform architecture',
      title: '覆盖 gateway、推荐、capability 治理、routing 与供给侧运营的一体化 execution platform。',
      text:
        'AgentEarth 不是普通工具 marketplace。它围绕外部 capability 执行的完整生命周期构建：服务从哪里来，如何被治理，agent 如何选择，调用如何 routing，失败如何 fallback。',
      diagram: {
        leftLabel: 'Agents',
        leftBadges: ['AI assistant', '企业 agent', 'Workflow agent'],
        centerTitle: 'AgentEarth',
        centerText: 'Execution Layer',
        rightLabel: 'Capabilities',
        rightBadges: ['MCP', 'API', 'SaaS / Data']
      },
      layers: [
        {
          eyebrow: 'Agent-side control plane',
          title: 'Agent Gateway',
          icon: Network,
          text:
            '为 agent 团队提供统一外部服务入口，覆盖注册、鉴权、调用、计量和治理，让多种 capability 形态通过一致路径进入 runtime。',
          details: ['统一调用入口', '鉴权与权限边界', '用量计量', 'Connector 抽象']
        },
        {
          eyebrow: 'Execution intelligence',
          title: 'Recommendation Engine',
          icon: Radar,
          text:
            '基于任务意图、Tool Metadata、语义匹配和 Query 改写，帮助 agent 选择更合适的服务，减少关键词规则和硬编码。 ',
          details: ['意图理解', '语义服务匹配', 'Tool Metadata Lake', 'Query 改写']
        },
        {
          eyebrow: 'Capability governance',
          title: 'Capability Warehouse',
          icon: Boxes,
          text:
            '把外部工具从原始 endpoint 治理成 agent-ready capability，覆盖筛选、适配、标准化、监控、版本兼容和稳定执行。',
          details: ['服务筛选', 'Schema 优化', '版本兼容', '质量监控']
        },
        {
          eyebrow: 'Network and routing layer',
          title: 'X-net',
          icon: Route,
          text:
            '面向跨地域、多服务执行链路的 AI-native routing 与服务调度层，优化目标不是静态分发，而是任务完成。',
          details: ['网络状态感知', '动态 routing', '服务调度', '跨地域可达性']
        },
        {
          eyebrow: 'Supply-side operations',
          title: 'Service Provider Gateway',
          icon: CloudCog,
          text:
            '面向外部服务供给侧的运营层，支持服务接入、托管、标准化、质量运营和可用性提升。',
          details: ['服务方接入', '服务标准化', '可用性运营', 'Capability 包装']
        }
      ]
    },
    outcomes: {
      eyebrow: 'Business outcome',
      title: '优化 Cost per Successful Task，而不只是 Cost per API Call。',
      text:
        '对 agent 产品来说，真正的经济单元是任务完成。AgentEarth 优化的是决定多步外部执行链路能否完成、降级或失败的服务层。',
      metrics: [
        { label: '服务类别', value: '20+' },
        { label: 'Capability 形态', value: '5' },
        { label: 'Execution 层级', value: 'Full-stack' },
        { label: '接入路径', value: 'MCP + API' }
      ],
      cards: [
        {
          icon: Zap,
          title: '更快接入',
          text: '减少鉴权、schema 处理、错误逻辑、计费和服务接入上的重复工程。'
        },
        {
          icon: ShieldCheck,
          title: '更高执行可靠性',
          text: '通过服务治理、状态监控、routing、fallback 和结果质量信号，降低任务失败风险。'
        },
        {
          icon: Globe2,
          title: '全球服务可达性',
          text: '当用户、agent runtime、文件、API 和 SaaS 系统分布在不同地区时，改善执行路径。'
        },
        {
          icon: DatabaseZap,
          title: '可复用 capability intelligence',
          text: '把服务 metadata、行为日志、schema 和性能历史沉淀为长期 routing 与匹配优势。'
        }
      ]
    },
    evidence: {
      eyebrow: 'Evaluation evidence',
      title: '生产级 agent 需要验证 execution layer，而不是验证工具目录有多长。',
      text:
        '顶级 To B 平台的评估标准不是功能数量，而是运营控制、集成深度、治理能力和可衡量业务结果。AgentEarth 把同样标准用于 agent 外部服务执行。',
      cards: [
        {
          value: '01',
          title: '先看任务完成率，再看工具数量',
          text: '衡量多步外部动作是完成、降级还是失败。只有能提升 successful task outcome 的工具供给才有价值。'
        },
        {
          value: '02',
          title: '先治理，再规模化',
          text: '把鉴权、schema 质量、版本兼容、权限边界、服务状态和供给侧质量纳入同一套运营模型。'
        },
        {
          value: '03',
          title: '先 runtime control，再扩 workflow',
          text: '保留 agent 的动态性，同时把服务选择、routing、retry、fallback 和可观测沉淀为共享 execution layer。'
        }
      ]
    },
    solutions: {
      eyebrow: 'Solutions',
      title: '为已经依赖外部服务的 agent 团队构建。',
      text:
        '当问题不再是单个 connector，而是工具、企业系统、地域和服务状态共同形成的 execution surface，AgentEarth 的价值会明显放大。',
      cards: [
        {
          icon: Sparkles,
          title: 'Agent 产品团队',
          subtitle: '面向 assistant、vertical agent、workflow agent，以及正在进入真实任务执行的 AI 产品。',
          bullets: [
            '更快接入搜索、数据、文件、commerce、消息和 SaaS action。',
            '随着外部服务数量增长，降低 connector 长期维护成本。',
            '在 runtime 中提升服务选择与 fallback 能力。'
          ]
        },
        {
          icon: Building2,
          title: '企业 AI 团队',
          subtitle: '面向需要受控调用企业系统和外部服务的内部 agent。',
          bullets: [
            '治理 CRM、ERP、工单、数据库、文件系统和业务 API 的访问。',
            '沉淀权限、服务边界、状态和调用 trace。',
            '减少一次性 connector 形成的不可控工具链。'
          ]
        },
        {
          icon: Globe2,
          title: '全球化 AI 应用',
          subtitle: '面向多地区用户、分布式外部服务和跨地域文件源的 AI 产品。',
          bullets: [
            '根据变化的网络与服务状态进行 routing。',
            '降低跨地域超时和可达性风险。',
            '围绕多服务链路的任务完成率做优化。'
          ]
        },
        {
          icon: Layers3,
          title: 'Agent 平台与 marketplace',
          subtitle: '面向管理大量外部工具、MCP server、workflow 和 capability 的平台团队。',
          bullets: [
            '把工具数量优势转化为可治理、可执行的服务供给。',
            '维护服务质量、metadata、schema 兼容和 fallback 覆盖。',
            '提供超越静态目录和人工分类的 runtime 匹配能力。'
          ]
        }
      ]
    },
    developers: {
      eyebrow: 'Developer path',
      title: '通过 MCP 或 API 接入，让平台推荐并执行合适的 capability。',
      text:
        'AgentEarth 保持接入面简单，把服务复杂度沉淀到 execution layer。agent 先推荐、再校验 schema、通过返回的 endpoint 执行，并基于结果继续 workflow。',
      steps: [
        ['1', '把 agent 当前任务发送给 recommendation。'],
        ['2', '根据工具描述、schema、使用场景和成本信号选择服务。'],
        ['3', '使用返回的 tool URL 和已校验参数执行调用。'],
        ['4', '基于结果、指标和 fallback 信号继续 workflow。']
      ],
      codeTab: 'MCP config',
      codeAlt: 'Skill API',
      codeCaption: '适用于 MCP-compatible agent runtime 与 API-based execution flow。',
      integrationsAria: '支持的 capability 类型',
      integrations: [
        'MCP servers',
        'REST / GraphQL APIs',
        'AI Skills',
        'Workflows',
        'Agent Services',
        '企业系统',
        'SaaS tools',
        '数据服务',
        '搜索与检索',
        '文件服务',
        'Commerce actions',
        'Media generation'
      ]
    },
    trust: {
      eyebrow: 'Trust and operations',
      title: '在服务进入 production agent runtime 前完成治理。',
      text:
        '企业级 agent execution 需要受控访问、清晰服务边界、可观测性、供给侧质量运营和失败处理。AgentEarth 是 operations layer，不是公开目录。',
      cards: [
        {
          icon: LockKeyhole,
          title: '企业访问控制',
          text: '面向 API key、服务凭证、权限边界和受控调用路径设计。'
        },
        {
          icon: Activity,
          title: 'Execution 可观测性',
          text: '跟踪服务状态、失败调用、重试、fallback、延迟和任务级执行质量。'
        },
        {
          icon: BadgeCheck,
          title: 'Governed capability supply',
          text: '外部服务进入 agent runtime 前，先经过筛选、适配、标准化、监控和运营。'
        }
      ],
      ops: [
        ['服务健康', '已监控'],
        ['Fallback 路径', '可用'],
        ['Schema 兼容性', '已治理'],
        ['跨地域 route', '已优化']
      ]
    },
    resources: {
      eyebrow: 'Resources',
      title: '面向企业买方和 agent 平台团队的评估材料。',
      text:
        '当外部服务已经影响任务完成率、用户体验、工程维护成本或全球化执行稳定性时，应把评估从产品理解推进到真实链路验证。',
      cards: [
        {
          icon: FileText,
          title: '管理层 briefing',
          text: '说明 AgentEarth 的 category、架构边界、买方角色，以及它在 agent execution stack 中的位置。',
          cta: '索取 briefing',
          href: '#contact'
        },
        {
          icon: Workflow,
          title: '场景评估图',
          text: '覆盖 agent 产品、企业 AI 团队、全球化 AI 应用和多工具平台的 evaluation map。',
          cta: '索取场景图',
          href: '#contact'
        },
        {
          icon: Code2,
          title: '集成文档',
          text: '通过 MCP 或 Skill API 接入，获取 recommendation，按 schema 执行，并检查返回结果。',
          cta: '打开文档',
          href: 'https://www.agentearth.ai/docs'
        }
      ]
    },
    readiness: {
      eyebrow: 'Enterprise readiness',
      title: '企业在把 AgentEarth 放进 agent runtime 前，应该验证什么。',
      text:
        '评估不应只证明 connector 覆盖数量，而要证明外部服务 execution 能否被治理、观测、routing 和扩展，同时不把脆弱逻辑重新推回每个 agent 应用。',
      pillars: [
        {
          icon: ShieldCheck,
          title: '安全与权限控制',
          text: '在扩展服务覆盖前，先明确服务权限、API key、租户边界、审批流程和 execution policy。'
        },
        {
          icon: Activity,
          title: '可观测与失败分析',
          text: '在统一 execution view 中追踪失败调用、fallback 决策、服务健康、延迟、provider 状态和任务结果变化。'
        },
        {
          icon: Route,
          title: 'Routing 与 fallback 策略',
          text: '定义 agent 什么时候重试、切换 provider、使用备用 capability，或者返回受控失败状态。'
        },
        {
          icon: CloudCog,
          title: 'Provider operations',
          text: '持续运营服务 metadata、schema 兼容、版本漂移、可用性和 provider 质量。'
        }
      ],
      checklistTitle: 'POC 验收标准',
      checklist: [
        '接入一条真实任务链路，且包含两个以上外部服务。',
        '测试前记录当前失败模式和维护成本。',
        '衡量完成率、延迟、fallback 命中率和 Cost per Successful Task。',
        '在扩展更多服务类别前，明确扩展规则与治理责任。'
      ]
    },
    evaluation: {
      eyebrow: 'Deployment path',
      title: '先用一条链路验证 execution layer，再扩展到更多服务类别。',
      text:
        '最有效的企业评估不是泛泛试用，而是选择一条接近生产环境的真实链路，明确输入、服务状态、fallback 行为和任务级结果。',
      stages: [
        ['01', '限定一条链路', '选择一个已经依赖两个以上外部服务、并且失败模式清晰的任务。'],
        ['02', '统一服务接入', '把 MCP、API、Workflow 或 Agent Service endpoint 接入到受治理的统一入口。'],
        ['03', '衡量执行质量', '跟踪完成率、延迟、fallback、失败调用、服务健康和 Cost per Successful Task。'],
        ['04', '带治理扩展', '当 routing 与 fallback 证明价值后，再扩展到更多服务类别。']
      ],
      outputs: ['服务清单', 'Fallback 模型', 'Routing 策略', '任务结果看板']
    },
    cta: {
      eyebrow: 'Evaluation path',
      title: '从一条真实外部服务执行链路开始验证。',
      text:
        '合适的 POC 不是泛泛试用 sandbox，而是选择一个已经被服务发现、接入、routing、fallback 或跨地域可达性影响的真实任务。',
      primary: '联系销售',
      secondary: '阅读文档',
      mailSubject: 'AgentEarth 平台介绍'
    },
    footer: {
      text:
        '面向 Agent Internet 的 infra，覆盖外部 capability access、routing、orchestration、reliability 与 fallback。',
      columns: [
        ['平台', ['架构', '开发者', '信任']],
        ['解决方案', ['Agent 产品', '企业 AI', '全球化 AI 应用']],
        ['公司', ['文档', '联系', '登录']]
      ],
      copyright: '© 2026 AgentEarth. All rights reserved.',
      tagline: 'Built for agent runtime execution.'
    }
  }
};

const hrefByFooterLabel = {
  Architecture: '#platform',
  Developers: '#developers',
  Trust: '#trust',
  'Agent products': '#solutions',
  'Enterprise AI': '#solutions',
  'Global AI apps': '#solutions',
  Docs: 'https://www.agentearth.ai/docs',
  Contact: 'mailto:contact@agentearth.ai',
  Login: 'https://www.agentearth.ai/login',
  架构: '#platform',
  开发者: '#developers',
  信任: '#trust',
  'Agent 产品': '#solutions',
  '企业 AI': '#solutions',
  '全球化 AI 应用': '#solutions',
  文档: 'https://www.agentearth.ai/docs',
  联系: 'mailto:contact@agentearth.ai',
  登录: 'https://www.agentearth.ai/login'
};

const cn2 = {
  nav: [
    { label: '首页', href: '#top' },
    { label: '判断', href: '#problems' },
    { label: '边界', href: '#boundary' },
    { label: '产品', href: '#product' },
    { label: '场景', href: '#scenarios' },
    { label: '售前', href: '#materials' },
    { label: '验证', href: '#poc' }
  ],
  heroStats: [
    ['不是', '工具市场'],
    ['不是', '普通 API gateway'],
    ['定位', '外部服务 execution layer']
  ],
  heroSignals: [
    '已经接入多个 MCP / API / Workflow',
    '外部服务失败会直接影响用户体验',
    '团队开始自建 retry、fallback、监控或工具选择规则',
    '业务要从 demo 进入真实任务执行'
  ],
  pressureCards: [
    {
      title: 'Demo 阶段关注“能不能调通”',
      text: '国内团队常见起点是先接几个 API 或 MCP 跑通 demo，但上线后会立刻遇到鉴权、参数、版本、限流、返回结构和服务状态变化。'
    },
    {
      title: '上线阶段关注“能不能稳定完成”',
      text: 'agent 调用搜索、数据、文件、企业系统和第三方 SaaS 时，任何一个服务超时、失败或结果异常，都会表现为 agent 没完成任务。'
    },
    {
      title: '规模化阶段关注“谁来治理复杂度”',
      text: '服务数量增长后，靠人工分类、关键词规则和硬编码选择工具，很快会变成维护成本和稳定性风险。'
    }
  ],
  buyerCards: [
    ['产品负责人', '看任务完成率、用户体验，以及从 demo 到规模化上线的稳定性边界。'],
    ['技术负责人', '看 schema、权限、routing、fallback、可观测，以及与现有系统的集成成本。'],
    ['业务负责人', '看是否能把更多真实业务动作交给 agent，而不是停留在问答和内容生成。'],
    ['采购 / 管理层', '看 POC 是否有清晰范围、指标、风险边界和后续扩展路径。']
  ],
  differences: [
    ['不是工具市场', '重点不是陈列更多工具，而是让外部服务进入 agent runtime 后可治理、可匹配、可稳定调用。'],
    ['不是普通 API 网关', '不只统一入口，还覆盖服务理解、状态监控、routing、fallback 和执行链路可观测。'],
    ['不是固定 Workflow', '不是把流程写死，而是在多任务、多服务、多状态下支撑动态选择和稳定执行。'],
    ['不是单纯网络加速', 'X-net 服务于外部服务调用的可达性、路径选择和任务级执行稳定性。']
  ],
  modules: [
    {
      icon: Network,
      title: 'Agent Gateway',
      label: '统一入口',
      text: '把 MCP、API、Skill、Workflow、Agent Service 接入到统一调用入口，减少逐个服务对接。'
    },
    {
      icon: Radar,
      title: '推荐引擎',
      label: '服务匹配',
      text: '基于任务意图、Tool Metadata、语义理解和 Query 改写，帮助 agent 找到更合适的服务。'
    },
    {
      icon: Boxes,
      title: '能力仓库',
      label: '服务治理',
      text: '对外部服务做筛选、适配、schema 优化、版本兼容、状态监控和 fallback 治理。'
    },
    {
      icon: Route,
      title: 'X-net',
      label: 'routing',
      text: '面向跨地域、多服务调用链路，提供网络状态感知、routing 和服务调度支撑。'
    },
    {
      icon: CloudCog,
      title: '服务托管运营平台',
      label: '供给侧',
      text: '让外部服务更容易被接入、托管、标准化，并转化为 agent 可稳定调用的 capability。'
    }
  ],
  scenarios: [
    {
      title: 'Agent 产品从 demo 进入上线',
      text: 'AI assistant、vertical agent、workflow agent 开始调用搜索、文件、数据、支付、消息和业务 API。',
      result: '更快接入更多服务，减少 connector 维护。'
    },
    {
      title: '企业内部 agent 调业务系统',
      text: '客服、销售、运营、财务 agent 需要访问 CRM、ERP、工单、数据库、文件系统和内部 API。',
      result: '把权限、接口、状态和调用链路纳入治理。'
    },
    {
      title: '工具平台 / MCP 平台服务数量增长',
      text: '平台已经有大量工具，但服务质量、metadata、schema、权限和 fallback 难以长期维护。',
      result: '把工具数量转化为可执行、可治理的服务能力。'
    },
    {
      title: '出海 AI 产品跨地域调用服务',
      text: '用户、agent runtime、文件源、外部 API 和 SaaS 系统分布在不同地区，延迟和可达性影响任务完成。',
      result: '通过 X-net、routing 与 fallback 降低跨地域不确定性。'
    }
  ],
  poc: [
    ['选一条真实链路', '例如：查询数据 -> 生成结果 -> 写入业务系统，或者搜索 -> 文件处理 -> 调用 SaaS。'],
    ['列出服务清单', '明确涉及哪些 MCP、API、Skill、Workflow、Agent Service，以及当前失败点。'],
    ['看任务级指标', '不要只看单次 API 延迟，重点看任务完成率、失败原因、fallback 效果和维护成本。'],
    ['决定是否规模化接入', '如果稳定性、接入效率或维护成本改善明显，再扩展到更多服务和场景。']
  ],
  deliverables: [
    '当前外部服务调用链路图',
    '失败点与 fallback 清单',
    'AgentEarth 接入范围建议',
    '任务级 POC 指标表'
  ],
  rollout: [
    ['接入范围', '先选 1 条真实任务链路，不要求一次性接完整工具平台。'],
    ['技术前提', '明确涉及的 MCP、API、Workflow、权限方式、调用频率和失败日志。'],
    ['验证指标', '看任务完成率、失败定位时间、fallback 命中、维护成本和扩展复杂度。'],
    ['边界说明', '不替代模型、不替代业务系统、不承诺所有外部服务质量由平台单方面控制。']
  ],
  materials: [
    ['售前诊断表', '梳理当前 agent 调用链路、服务清单、权限方式、失败点和已有 connector 维护成本。'],
    ['POC 指标表', '把任务完成率、失败定位时间、fallback 命中、延迟、成本和人工介入次数变成验收项。'],
    ['集成边界说明', '明确 AgentEarth 接入哪些 MCP、API、Workflow、Agent Service，以及不接入哪些业务系统。'],
    ['扩展路线图', '从第一条链路扩展到更多 capability category，定义治理责任、服务运营和扩展节奏。']
  ],
  notFit: [
    ['只做一次 demo', '如果目标只是短期展示，而不是让 agent 长期执行真实外部服务，AgentEarth 的治理价值无法充分体现。'],
    ['只有一个稳定内部 API', '如果调用链路单一、稳定、权限简单，现有内部接口管理可能已经足够。'],
    ['没有外部服务失败压力', '如果任务不受服务状态、schema drift、限流、跨地域可达性影响，暂时不需要 execution layer。'],
    ['不需要 fallback 和 observability', '如果业务允许 agent 调用失败后直接中断，平台级 routing 与观测价值会被弱化。']
  ],
  decisionQuestions: [
    '当前 agent 任务失败，有多少来自模型以外的外部服务调用？',
    '服务数量增长后，谁负责 metadata、schema、权限和版本变化？',
    '是否需要在多个 provider / capability 之间做 routing 与 fallback？',
    'POC 成功后，能否复制到更多业务线和服务类别？'
  ]
};

function App() {
  if (currentPage === 'zh-cn') {
    return <ChinaSecondVersion />;
  }

  const site = copy[currentPage];

  return (
    <main className={site.langClass}>
      <Header site={site} />
      <Hero site={site} />
      <ProblemSection site={site} />
      <PlatformSection site={site} />
      <OutcomesSection site={site} />
      <EvidenceSection site={site} />
      <SolutionsSection site={site} />
      <DevelopersSection site={site} />
      <TrustSection site={site} />
      <EnterpriseReadinessSection site={site} />
      <ResourcesSection site={site} />
      <EvaluationSection site={site} />
      <CtaSection site={site} />
      <Footer site={site} />
    </main>
  );
}

function ChinaSecondVersion() {
  return (
    <main className="cn2">
      <header className="cn2-header">
        <a className="cn2-brand" href="#top" aria-label="AgentEarth 国内版">
          <span className="brand-mark">
            <span />
          </span>
          <span>AgentEarth</span>
        </a>
        <nav aria-label="第二中文版导航">
          {cn2.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="cn2-header-actions">
          <a href="../zh/">原中文版</a>
          <a href="../">EN</a>
          <a className="cn2-header-cta" href="#contact">
            联系销售
          </a>
        </div>
      </header>

      <section id="top" className="cn2-hero">
        <div className="container cn2-hero-grid">
          <div className="cn2-hero-copy">
            <div className="cn2-eyebrow">第二中文版 · 面向国内客户阅读习惯</div>
            <h1>
              <span>让 agent 稳定调用外部服务</span>
              <span>不再靠一次性 connector 撑业务。</span>
            </h1>
            <p>
              当 agent 开始查询数据、处理文件、调用企业系统、连接 SaaS 和执行业务流程，真正的瓶颈会从“模型会不会回答”，转向“外部服务能不能被长期稳定调用”。
            </p>
            <div className="cn2-actions">
              <a className="cn2-primary" href="#poc">
                看验证路径
                <ArrowRight size={18} />
              </a>
              <a className="cn2-secondary" href="#product">
                看产品能力
              </a>
            </div>
            <div className="cn2-hero-stats" aria-label="AgentEarth 定位">
              {cn2.heroStats.map(([label, value]) => (
                <div key={value}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="cn2-diagnosis">
            <div className="cn2-diagnosis-head">
              <span>是否需要 AgentEarth</span>
              <strong>判断信号</strong>
            </div>
            {cn2.heroSignals.map((signal) => (
              <div className="cn2-signal" key={signal}>
                <Check size={17} />
                <span>{signal}</span>
              </div>
            ))}
            <div className="cn2-visual" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section id="problems" className="cn2-section cn2-problems">
        <div className="container">
          <div className="cn2-section-head">
            <span>核心判断</span>
            <h2>国内 agent 团队缺的不是“更多工具”，而是外部服务进入 runtime 后的治理能力。</h2>
            <p>
              接一个服务通常不难，难的是服务数量增加、任务链路变长、客户场景变复杂之后，仍然能让 agent 稳定完成真实任务。
            </p>
          </div>
          <div className="cn2-pressure-grid">
            {cn2.pressureCards.map((card, index) => (
              <article key={card.title} className="cn2-pressure-card">
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
          <div className="cn2-buyer-grid">
            {cn2.buyerCards.map(([role, text]) => (
              <article key={role}>
                <h3>{role}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="boundary" className="cn2-section cn2-compare">
        <div className="container cn2-split">
          <div>
            <div className="cn2-eyebrow">先把边界说清楚</div>
            <h2>AgentEarth 不是把现有互联网能力简单打包给 agent。</h2>
            <p>
              国内客户最关心的是：这个平台到底解决哪一层问题，会不会被 API 聚合、工具市场、工作流平台或模型厂商内建吃掉。AgentEarth 的位置是外部服务 execution layer。
            </p>
          </div>
          <div className="cn2-difference-list">
            {cn2.differences.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="cn2-section cn2-product">
        <div className="container">
          <div className="cn2-section-head">
            <span>产品结构</span>
            <h2>从“接上工具”升级为“治理一组可执行的外部服务”。</h2>
            <p>
              第二中文版不从国际化官网的模块介绍出发，而按国内客户的采购和落地逻辑组织：先统一入口，再做服务匹配、服务治理、routing 和供给侧运营。
            </p>
          </div>
          <div className="cn2-module-grid">
            {cn2.modules.map((module) => (
              <article key={module.title} className="cn2-module">
                <div className="cn2-module-icon">
                  <module.icon size={22} />
                </div>
                <span>{module.label}</span>
                <h3>{module.title}</h3>
                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="scenarios" className="cn2-section cn2-scenarios">
        <div className="container">
          <div className="cn2-section-head">
            <span>适用场景</span>
            <h2>当外部服务开始影响任务完成率，就适合评估 AgentEarth。</h2>
          </div>
          <div className="cn2-scenario-grid">
            {cn2.scenarios.map((scenario) => (
              <article key={scenario.title} className="cn2-scenario">
                <h3>{scenario.title}</h3>
                <p>{scenario.text}</p>
                <strong>{scenario.result}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cn2-section cn2-rollout">
        <div className="container">
          <div className="cn2-section-head">
            <span>实施边界</span>
            <h2>国内客户最需要先确认的，不是平台有多少能力，而是第一条链路怎么验证。</h2>
            <p>
              AgentEarth 更适合从真实任务链路切入：先确认服务清单、失败点、权限方式和任务级指标，再判断是否进入规模化接入。
            </p>
          </div>
          <div className="cn2-rollout-grid">
            {cn2.rollout.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="cn2-section cn2-materials">
        <div className="container">
          <div className="cn2-section-head">
            <span>售前评估材料</span>
            <h2>国内 To B 客户需要看到的不是“功能很多”，而是评估、验收和扩展边界清楚。</h2>
            <p>
              AgentEarth 适合用可交付材料推进决策：先定义链路、指标、集成范围和不适合场景，再判断是否进入规模化接入。
            </p>
          </div>
          <div className="cn2-material-grid">
            {cn2.materials.map(([title, text]) => (
              <article key={title}>
                <FileText size={20} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="cn2-fit-grid">
            <div>
              <h3>不适合优先评估 AgentEarth 的情况</h3>
              <div className="cn2-fit-list">
                {cn2.notFit.map(([title, text]) => (
                  <article key={title}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="cn2-question-panel">
              <h3>采购和技术评审应先问清楚</h3>
              {cn2.decisionQuestions.map((question) => (
                <div key={question}>
                  <CircleDot size={15} />
                  <span>{question}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="poc" className="cn2-section cn2-poc">
        <div className="container cn2-split">
          <div>
            <div className="cn2-eyebrow">验证方式</div>
            <h2>不要做泛泛试用，用一条真实外部服务执行链路验证。</h2>
            <p>
              AgentEarth 的价值不应该用“工具数量”验证，而应该用真实 agent 任务链路中的接入效率、调用成功率、失败定位、fallback 效果和长期维护成本验证。
            </p>
          </div>
          <div className="cn2-poc-list">
            {cn2.poc.map(([title, text], index) => (
              <article key={title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="cn2-deliverables">
            <h3>一次有效评估应该产出什么</h3>
            {cn2.deliverables.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="cn2-final">
        <div className="container cn2-final-box">
          <div>
            <span>下一步</span>
            <h2>选择 1 条真实调用链路，判断 AgentEarth 是否能降低接入、治理和稳定执行成本。</h2>
          </div>
          <a href="mailto:contact@agentearth.ai?subject=AgentEarth%20%E5%9B%BD%E5%86%85%E7%89%88%E5%9C%BA%E6%99%AF%E8%AF%84%E4%BC%B0">
            预约场景评估
            <Handshake size={18} />
          </a>
        </div>
      </section>

      <footer className="cn2-footer">
        <div className="container">
          <strong>AgentEarth</strong>
          <span>面向 agent 外部服务调用的 execution layer · 第二中文版</span>
        </div>
      </footer>
    </main>
  );
}

function Header({ site }) {
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
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="text-link" href="https://www.agentearth.ai/docs">
            {site.header.docs}
          </a>
          <a className="text-link language-link" href={site.header.languageHref}>
            {site.header.languageLabel}
          </a>
          <a className="button button-small button-light" href="#contact">
            {site.header.sales}
          </a>
        </div>
      </header>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href={site.header.languageHref}>{site.header.languageLabel}</a>
      </nav>
    </>
  );
}

function Hero({ site }) {
  return (
    <section id="top" className="hero section-dark">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <CircleDot size={14} />
            {site.hero.eyebrow}
          </div>
          <h1>
            {site.hero.titleLines
              ? site.hero.titleLines.map((line) => (
                  <span className="title-line" key={line}>
                    {line}
                  </span>
                ))
              : site.hero.title}
          </h1>
          <p className="hero-subtitle">
            {site.hero.subtitleLines
              ? site.hero.subtitleLines.map((line) => (
                  <span className="subtitle-line" key={line}>
                    {line}
                  </span>
                ))
              : site.hero.subtitle}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              {site.hero.primary}
              <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#developers">
              {site.hero.secondary}
            </a>
          </div>
          <div className="hero-proof">
            {site.hero.proofPoints.map((item) => (
              <div key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-panel" aria-label="AgentEarth execution flow preview">
          <div className="panel-top">
            <span>{site.hero.panelTitle}</span>
            <span className="status-pill">{site.hero.panelStatus}</span>
          </div>
          <div className="execution-map">
            <MapColumn items={site.hero.columns.agent} primary />
            <Connector />
            <MapColumn items={site.hero.columns.platform} center />
            <Connector />
            <MapColumn items={site.hero.columns.service} />
          </div>
          <div className="signal-grid">
            {site.hero.signals.map(([signal, status]) => (
              <div key={signal}>
                <span>{signal}</span>
                <strong>{status}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MapColumn({ items, primary = false, center = false }) {
  return (
    <div className={`map-column ${center ? 'center-column' : ''}`}>
      <div className={`map-node ${primary ? 'primary-node' : ''} ${center ? 'accent-node' : ''}`}>
        {items[0]}
      </div>
      {items.slice(1).map((item) => (
        <div className="mini-node" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

function Connector() {
  return (
    <div className="map-connector">
      <span />
      <span />
      <span />
    </div>
  );
}

function ProblemSection({ site }) {
  return (
    <section className="section section-light">
      <div className="container">
        <SectionHeading {...site.problem} />
        <div className="pain-grid">
          {site.problem.cards.map((item) => (
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

function PlatformSection({ site }) {
  return (
    <section id="platform" className="section platform-section section-dark-soft">
      <div className="container">
        <SectionHeading {...site.platform} invert />
        <div className="architecture-wrap">
          <div className="architecture-diagram" aria-label="AgentEarth platform architecture">
            <div className="arch-side">
              <span className="arch-label">{site.platform.diagram.leftLabel}</span>
              {site.platform.diagram.leftBadges.map((badge) => (
                <div className="arch-badge" key={badge}>
                  {badge}
                </div>
              ))}
            </div>
            <div className="arch-core">
              <div className="core-ring ring-one" />
              <div className="core-ring ring-two" />
              <div className="core-center">
                <Network size={30} />
                <strong>{site.platform.diagram.centerTitle}</strong>
                <span>{site.platform.diagram.centerText}</span>
              </div>
            </div>
            <div className="arch-side">
              <span className="arch-label">{site.platform.diagram.rightLabel}</span>
              {site.platform.diagram.rightBadges.map((badge) => (
                <div className="arch-badge" key={badge}>
                  {badge}
                </div>
              ))}
            </div>
          </div>
          <div className="layer-list">
            {site.platform.layers.map((layer) => (
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

function OutcomesSection({ site }) {
  return (
    <section className="section section-light">
      <div className="container split-section">
        <div>
          <div className="eyebrow eyebrow-dark">
            <LineChart size={14} />
            {site.outcomes.eyebrow}
          </div>
          <h2>{site.outcomes.title}</h2>
          <p>{site.outcomes.text}</p>
          <div className="metric-grid">
            {site.outcomes.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="outcome-grid">
          {site.outcomes.cards.map((item) => (
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

function EvidenceSection({ site }) {
  return (
    <section className="section evidence-section">
      <div className="container">
        <SectionHeading {...site.evidence} />
        <div className="evidence-grid">
          {site.evidence.cards.map((item) => (
            <article className="evidence-card" key={item.title}>
              <span>{item.value}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection({ site }) {
  return (
    <section id="solutions" className="section solutions-section">
      <div className="container">
        <SectionHeading {...site.solutions} />
        <div className="solution-grid">
          {site.solutions.cards.map((card) => (
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

function DevelopersSection({ site }) {
  return (
    <section id="developers" className="section developer-section section-dark">
      <div className="container developer-grid">
        <div>
          <div className="eyebrow">
            <TerminalSquare size={14} />
            {site.developers.eyebrow}
          </div>
          <h2>{site.developers.title}</h2>
          <p>{site.developers.text}</p>
          <div className="developer-steps">
            {site.developers.steps.map(([num, text]) => (
              <div key={num}>
                <strong>{num}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="code-card">
          <div className="code-tabs">
            <span>{site.developers.codeTab}</span>
            <span>{site.developers.codeAlt}</span>
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
            {site.developers.codeCaption}
          </div>
        </div>
      </div>
      <div className="container integration-strip" aria-label={site.developers.integrationsAria}>
        {site.developers.integrations.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function TrustSection({ site }) {
  return (
    <section id="trust" className="section section-light trust-section">
      <div className="container split-section">
        <div>
          <SectionHeading {...site.trust} />
          <div className="trust-grid">
            {site.trust.cards.map((item) => (
              <article key={item.title}>
                <IconBox icon={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="ops-panel">
          {site.trust.ops.map(([label, value]) => (
            <div className="ops-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
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

function EnterpriseReadinessSection({ site }) {
  return (
    <section id="readiness" className="section readiness-section">
      <div className="container">
        <SectionHeading {...site.readiness} />
        <div className="readiness-grid">
          <div className="readiness-pillars">
            {site.readiness.pillars.map((pillar) => (
              <article key={pillar.title}>
                <IconBox icon={pillar.icon} />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
          <div className="readiness-checklist">
            <span>{site.readiness.checklistTitle}</span>
            {site.readiness.checklist.map((item) => (
              <div key={item}>
                <Check size={16} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection({ site }) {
  return (
    <section id="resources" className="section resources-section">
      <div className="container">
        <SectionHeading {...site.resources} />
        <div className="resource-grid">
          {site.resources.cards.map((resource) => (
            <article className="card resource-card" key={resource.title}>
              <IconBox icon={resource.icon} />
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
              <a href={resource.href}>
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

function EvaluationSection({ site }) {
  return (
    <section className="section evaluation-section">
      <div className="container evaluation-wrap">
        <div>
          <div className="eyebrow eyebrow-dark">
            <Workflow size={14} />
            {site.evaluation.eyebrow}
          </div>
          <h2>{site.evaluation.title}</h2>
          <p>{site.evaluation.text}</p>
          <div className="evaluation-output" aria-label="Evaluation outputs">
            {site.evaluation.outputs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="evaluation-steps">
          {site.evaluation.stages.map(([num, title, text]) => (
            <article key={num}>
              <strong>{num}</strong>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection({ site }) {
  return (
    <section id="contact" className="section cta-section section-dark">
      <div className="container cta-card">
        <div>
          <span className="eyebrow">{site.cta.eyebrow}</span>
          <h2>{site.cta.title}</h2>
          <p>{site.cta.text}</p>
        </div>
        <div className="cta-actions">
          <a
            className="button button-primary"
            href={`mailto:contact@agentearth.ai?subject=${encodeURIComponent(site.cta.mailSubject)}`}
          >
            {site.cta.primary}
            <Handshake size={18} />
          </a>
          <a className="button button-secondary" href="https://www.agentearth.ai/docs">
            {site.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ site }) {
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
          <p>{site.footer.text}</p>
        </div>
        {site.footer.columns.map(([title, links]) => (
          <div key={title}>
            <strong>{title}</strong>
            {links.map((label) => (
              <a key={label} href={hrefByFooterLabel[label]}>
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>{site.footer.copyright}</span>
        <span>{site.footer.tagline}</span>
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
