export interface DeviceItem {
  id: string
  nickname: string
  model: string
  lastSeenISO: string
  storage: {
    usedMB: number
    totalMB: number
  }
  installedModels: Array<{
    modelId: string
    version: string
    status: 'ok' | 'update-available'
  }>
}

export const devices: DeviceItem[] = [
  {
    id: 'device-001',
    nickname: 'Field Scout',
    model: 'DJI RC Pro Enterprise',
    lastSeenISO: '2024-01-15T14:30:00Z',
    storage: {
      usedMB: 1247,
      totalMB: 8192
    },
    installedModels: [
      {
        modelId: 'agri-crop-monitor-v1',
        version: '1.2.0',
        status: 'ok'
      },
      {
        modelId: 'agri-weed-detector-v2',
        version: '2.1.0',
        status: 'update-available'
      },
      {
        modelId: 'utility-pole-inspector-v1',
        version: '1.0.0',
        status: 'ok'
      }
    ]
  },
  {
    id: 'device-002',
    nickname: 'Urban Inspector',
    model: 'DJI RC Pro Enterprise',
    lastSeenISO: '2024-01-15T16:45:00Z',
    storage: {
      usedMB: 892,
      totalMB: 8192
    },
    installedModels: [
      {
        modelId: 'inspection-bridge-monitor-v1',
        version: '1.1.0',
        status: 'ok'
      },
      {
        modelId: 'inspection-roof-inspector-v1',
        version: '1.0.0',
        status: 'ok'
      },
      {
        modelId: 'utility-solar-inspector-v1',
        version: '1.3.0',
        status: 'update-available'
      }
    ]
  }
]

export const getDeviceById = (id: string): DeviceItem | undefined => {
  return devices.find(device => device.id === id)
}
