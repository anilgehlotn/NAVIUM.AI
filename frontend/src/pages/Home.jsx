import React from 'react';

const AgentCard = ({ title, description, icon }) => {
  return (
    <div className="agent-card">
      <div className="agent-icon">{icon}</div>
      <h3 className="agent-title">{title}</h3>
      <p className="agent-desc">{description}</p>
    </div>
  );
};

const Home = () => {
  const agents = [
    {
      title: 'Chat Agent',
      description: 'Engage in natural, contextual conversations with a highly advanced linguistic model.',
      icon: '💬'
    },
    {
      title: 'Coding Agent',
      description: 'Your pair-programming partner. Generates, refactors, and debugs code instantly.',
      icon: '💻'
    },
    {
      title: 'Search Agent',
      description: 'Deep web exploration and data synthesis tailored to your queries.',
      icon: '🔍'
    },
    {
      title: 'Image Agent',
      description: 'Create and manipulate high-fidelity visual assets through descriptive prompts.',
      icon: '🖼️'
    },
    {
      title: 'PDF Agent',
      description: 'Analyze, summarize, and extract critical data points from complex documents.',
      icon: '📄'
    },
    {
      title: 'PPT Agent',
      description: 'Instantly generate beautiful, structured presentations from raw text inputs.',
      icon: '📊'
    }
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Cortex AI</h1>
        <p className="hero-desc">
          The ultimate multi-agent SaaS platform designed to accelerate your workflow. 
          Unleash the power of specialized, autonomous agents directly from your browser.
        </p>
      </section>

      <section className="agents-grid">
        {agents.map((agent, index) => (
          <AgentCard 
            key={index} 
            title={agent.title} 
            description={agent.description} 
            icon={agent.icon} 
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
