const ProtectRoute = ({ children }) => {
  const access_token = localStorage.getItem('access_token')
  if (access_token) return children
}

export default ProtectRoute
