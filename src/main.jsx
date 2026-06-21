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

const currentLang =
  document.documentElement.lang?.toLowerCase().startsWith('zh') ||
  window.location.pathname.includes('/zh/')
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
      { label: 'Resources', href: '#resources' }
    ],
    header: {
      docs: 'Docs',
      sales: 'Talk to sales',
      languageLabel: '中文',
      languageHref: 'zh/'
    },
    hero: {
      eyebrow: 'Agent Internet Infra',
      title: 'The external service execution layer for AI agents.',
      titleLines: null,
      subtitle:
        'AgentEarth helps agent teams discover, connect, govern, route, and reliably execute MCP, API, Skill, Workflow, and Agent Service capabilities through one enterprise-grade platform.',
      subtitleLines: null,
      primary: 'Book a platform briefing',
      secondary: 'View developer path',
      panelTitle: 'Runtime execution path',
      panelStatus: 'Live routing',
      columns: {
        agent: ['Agent Runtime', 'Intent', 'Context'],
        platform: ['AgentEarth', 'Recommend', 'Route', 'Fallback'],
        service: ['External Services', 'MCP', 'API', 'Workflow']
      },
      signals: [
        ['success rate', 'Optimized'],
        ['latency', 'Observed'],
        ['service state', 'Observed'],
        ['cost per task', 'Observed']
      ],
      proofPoints: [
        { value: '1,300+', label: 'agent-ready tools and services' },
        { value: 'MCP / API / Skill', label: 'native external capability access' },
        { value: 'Runtime-first', label: 'routing, fallback, and observability' }
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
      title: 'Move from overview to evaluation.',
      text:
        'Use AgentEarth when external services already affect task completion rate, user experience, engineering maintenance, or global execution stability.',
      cards: [
        {
          icon: FileText,
          title: 'Product Overview',
          text: 'A customer-readable explanation of AgentEarth as an external service execution platform for agents.',
          cta: 'Read overview',
          href: '#contact'
        },
        {
          icon: Workflow,
          title: 'Scenario Solutions',
          text: 'Use-case maps for agent products, enterprise AI teams, global AI apps, and tool-heavy platforms.',
          cta: 'Explore scenarios',
          href: '#contact'
        },
        {
          icon: Code2,
          title: 'Developer Docs',
          text:
            'Connect through MCP or Skill API, receive tool recommendations, execute with returned schemas, and inspect results.',
          cta: 'Open docs',
          href: 'https://www.agentearth.ai/docs'
        }
      ]
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
      title: '面向 agent 的外部服务 execution layer。',
      titleLines: ['面向 agent 的', '外部服务', 'execution layer。'],
      subtitle:
        'AgentEarth 帮助 agent 团队发现、接入、治理、 routing 并稳定执行 MCP、API、Skill、Workflow 与 Agent Service capability，形成企业级外部服务执行平台。',
      subtitleLines: [
        'AgentEarth 帮助 agent 团队发现、接入、治理、 routing，',
        '并稳定执行 MCP、API、Skill、Workflow 与 Agent Service capability，',
        '形成企业级外部服务执行平台。'
      ],
      primary: '预约平台介绍',
      secondary: '查看开发者路径',
      panelTitle: 'Runtime 执行链路',
      panelStatus: '实时 routing',
      columns: {
        agent: ['Agent Runtime', '任务意图', '上下文'],
        platform: ['AgentEarth', '推荐', 'Route', 'Fallback'],
        service: ['外部服务', 'MCP', 'API', 'Workflow']
      },
      signals: [
        ['成功率', '优化中'],
        ['延迟', '可观测'],
        ['服务状态', '可观测'],
        ['任务成本', '可观测']
      ],
      proofPoints: [
        { value: '1,300+', label: 'agent-ready 工具与服务' },
        { value: 'MCP / API / Skill', label: '原生外部 capability 接入' },
        { value: 'Runtime-first', label: 'routing、fallback 与可观测' }
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
      title: '从产品理解进入场景验证。',
      text:
        '当外部服务已经影响任务完成率、用户体验、工程维护成本或全球化执行稳定性时，就适合评估 AgentEarth。',
      cards: [
        {
          icon: FileText,
          title: '产品概览',
          text: '面向客户解释 AgentEarth 如何作为 agent 的外部服务 execution platform。',
          cta: '阅读概览',
          href: '#contact'
        },
        {
          icon: Workflow,
          title: '场景解决方案',
          text: '覆盖 agent 产品、企业 AI 团队、全球化 AI 应用和多工具平台的 use case map。',
          cta: '查看场景',
          href: '#contact'
        },
        {
          icon: Code2,
          title: '开发者文档',
          text: '通过 MCP 或 Skill API 接入，获取工具推荐，按 schema 执行，并检查返回结果。',
          cta: '打开文档',
          href: 'https://www.agentearth.ai/docs'
        }
      ]
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

function App() {
  const site = copy[currentLang];

  return (
    <main className={site.langClass}>
      <Header site={site} />
      <Hero site={site} />
      <ProblemSection site={site} />
      <PlatformSection site={site} />
      <OutcomesSection site={site} />
      <SolutionsSection site={site} />
      <DevelopersSection site={site} />
      <TrustSection site={site} />
      <ResourcesSection site={site} />
      <CtaSection site={site} />
      <Footer site={site} />
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
