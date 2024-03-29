export type form = {
  name: string,
  description: string,
  send_text: string,
  success_message: string,
  fields: field[]
}

export type field = {
  name: string,
  type: string,
  placeholder: string,
  required: boolean,
}