const API_URL = `${process.env.REACT_APP_BASE_URL}/v1/content/skills`;

export class SkillsApi {
    
    static async getAll() {
        const req = await fetch(API_URL);

        return req.json();
    }
 
    static async add(skill) {
        const req = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(skill),
        });

        return req.json();
    }
}
