export default class UserDTO {

    #username: string;
    #email: string;
    #password: string;
    #created: Date;
    #status: boolean;
    #role: string;
  
    constructor(
      username: string,
      email: string,
      password: string,
      created: Date = new Date(),
      status: boolean = true,
      role: string = "common"
    ) {
      this.#username = username;
      this.#email = email;
      this.#password = password;
      this.#created = created;
      this.#status = status;
      this.#role = role;
    }
  
    getUsername(): string {
      return this.#username;
    }
  
    getEmail(): string {
      return this.#email;
    }
  
    getPassword(): string {
      return this.#password;
    }
  
    getCreated(): Date {
      return this.#created;
    }
  
    getStatus(): boolean {
      return this.#status;
    }
  
    getRole(): string {
      return this.#role;
    }

    setUsername(username: string): void {
      this.#username = username;
    }
  
    setEmail(email: string): void {
      this.#email = email;
    }
  
    setPassword(password: string): void {
      this.#password = password;
    }
  
    setCreated(created: Date): void {
      this.#created = created;
    }
  
    setStatus(status: boolean): void {
      this.#status = status;
    }
  
    setRole(role: string): void {
      this.#role = role;
    }
  }
  