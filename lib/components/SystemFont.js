import React from 'react'

class SystemFont extends React.Component {
  render () {
    return (
      <style jsx global>{`
        @font-face {
          font-family: system;
          font-style: normal;
          font-weight: 300;
          src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'), local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'), local('Roboto-Light'), local('DroidSans'), local('Tahoma');
        }
        body {
          font-family: 'system';
        }
      
      `}</style>
    )
  }
}

export default SystemFont
