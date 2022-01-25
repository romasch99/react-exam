const API_URL = `${process.env.REACT_APP_BASE_URL}/v1/content/skills`;

export class SkillsApi {
    
    static async getAll(token) {
        const req = await fetch(API_URL,
            {method: "GET", headers: {authorization: `Bearer ${token}`}}
        );

        return req.json();
    }
 
    static async add(skill, token) {
        const req = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(skill),
        });

        return req.json();
    }
}
