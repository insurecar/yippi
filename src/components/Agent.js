import { h } from 'preact'
import { t } from 'ttag'

const Agent = ({ agents }) => {
  if (agents.length === 0) return null

  return (
    <div className="wrap">
      <div className="main">
        <div className="main__title">
          { t`Lurer du på noe om prosjektet?` }
        </div>
        <div className="main__sub-title">
          { t`Ta kontakt for mer informasjon:`}
        </div>
      </div>
      <div className = "wrap__agent">
      {agents.map((agent, idx) => (
        <div className="agent-description">
          <div className="agent-description-img">
            <div style={ { backgroundImage: `url(${agent.image.large})` } }></div>
          </div>

          <div className="agent-description-text">
            <div className="agent-description-text__title" dangerouslySetInnerHTML={{ __html:   agent.name  }}>
              { agent.name }
            </div>
            <div className="agent-description-text__item">
             <span>
              Mobil: <a className="agent-description-text-item__number" href={ `tel:${agent.phoneNumber}` }>
              { agent.phoneNumber }</a>
            </span>
            <span>
              E-post: <a className="agent-description-text-item__email" href={ `mailto:${agent.email}` }>
              { agent.email }</a>
            </span>
            </div>
          </div>
        </div>
      ))}

      </div>
      
    </div>
  )
}

export default Agent
