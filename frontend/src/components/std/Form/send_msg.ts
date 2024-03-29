import axios from "axios";

export default async function send_message(content: any, page: string) {
  const url = page.split("/")
  const current_lang = url[3];
  const current_page = url.length > 4 ? url.splice(0, 4) : "/";

  const request = {
    current_lang,
    current_page,
    content
  }

  return await axios.post('/api/send_message', request)
}