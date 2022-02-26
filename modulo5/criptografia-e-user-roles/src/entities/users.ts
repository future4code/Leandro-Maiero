export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export class User {
    protected id: string;
    protected name: string;
    protected email: string;
    protected role: USER_ROLES;
    protected password: string;

    constructor(
        id: string,
        name: string,
        email: string,
        role: USER_ROLES,
        password: string
    ) {
            this.id = id,
            this.name = name,
            this.email = email,
            this.role = role,
            this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }

    public getRole(): string {
        return this.role
    }

    public getPassword(): string {
        return this.password
    }

    public setPassword(input: string) {
        this.password = input
    }
}