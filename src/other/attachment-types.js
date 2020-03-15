/**
 * Attachment types
 *
 * @example
 *    import AttachmentType from './attachment-types.js
 *    <div v-if="attachment.type == AttachmentType.LIGHT">...</div>
 */
const light = 'light',
  socket = 'socket',
  temperatureSensor = 'temperature-sensor',
  doorSensor = 'door-sensor'

export const AttachmentType = {
  ALL: [light, socket, temperatureSensor, doorSensor],
  LIGHT: light,
  SOCKET: socket,
  TEMPERATURE_SENSOR: temperatureSensor,
  DOOR_SENSOR: doorSensor
}
