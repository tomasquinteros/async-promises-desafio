import * as jsonfile from "jsonfile"

class Contact {
  id?: number = undefined
  name: string = ""
}

class ContactsCollection {
  data: Contact[] = []
  async load() {
    const promise = jsonfile.readFile(__dirname + "/contacts.json")
    const json = await promise
    this.data = json
  }
  getAll() {
    return this.data
  }
  addOne(contact: Contact) {
    this.data.push(contact)
  }
  save(): Promise<any> {
    return jsonfile.writeFile(__dirname + "/contacts.json", this.data)
  }
  getOneById(id: number) {
    const encontrado = this.data.find((contacto) => {
      if (contacto?.id == id) {
        return true
      }
    })

    return encontrado
  }
}
export { ContactsCollection, Contact }
