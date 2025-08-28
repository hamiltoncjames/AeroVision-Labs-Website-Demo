export interface UserProfile {
  id: string
  email: string
  name: string
  org: string
  nfp: boolean
}

export const userProfile: UserProfile = {
  id: 'demo-user',
  email: 'demo@example.com',
  name: 'Demo Pilot',
  org: 'Uncrewed Systems',
  nfp: true
}
