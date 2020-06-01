import * as React from 'react'

type ReactWelcomeProps = {
  hide?: boolean,
  message?: String
}

class ReactWelcome extends React.Component<ReactWelcomeProps> {

  render() {

    if (this.props.hide) {
      return this.props.children
    }

    return (
      <div className="root" >
        <div className="animation-container" >
        <h4 className="message" >{this.props.message || '¡Bienvenido!'}</h4>
        </div>
        <div className="children" >
          {this.props.children}
        </div>
        <style jsx>{`
          .root {
            display: relative;
          }

          .children {
            position: absolut;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }

          .animation-container {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: #000;
            z-index: 1400;
            opacity: .99;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            animation-name: welcome-animation;
            animation-duration: 2s;
            animation-delay: 4s;
            animation-fill-mode: forwards;
            will-change: opacity;
          }

          @keyframes welcome-animation {
            from {
              opacity: 1;
            }

            to { 
              opacity: 0;
            }
          }

          .message {
            color: white;
            font-size: 32px;
            font-weight: 100;
            opacity: 0;
            animation-name: message-animation;
            animation-duration: 4s;
            animation-delay: 1s;
            animation-fill-mode: forwards;
            will-change: opacity;
          }

          @keyframes message-animation {
            from {
              opacity: 0;
            }

            50% {
              opacity: 1;
            }

            70% {
              opacity: 1
            }

            to { 
              opacity: 0;
            }
          }

        `}</style>
      </div>
    )
  }
}

export default ReactWelcome
