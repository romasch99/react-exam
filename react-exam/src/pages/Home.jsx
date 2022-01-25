import {useState, useEffect} from "react";
import {useAuth} from "../hooks/useAuth";
import {Skill} from "../components/Skill";
import {SkillsApi} from "../services/skills-api";
import {BlockFlex} from "../ui/atoms/Block"

export const Home = () => {
    const {token} = useAuth();
    const [skills, setSkills] = useState();
    
    const fetchSkills = async () => {
        const res = await SkillsApi.getAll(token);
        setSkills(res);
    };

    useEffect(() => {
        fetchSkills();
    }, []);
    
    const renderedSkills = !!skills
    ? skills.map((skill) => <Skill key={skills.id} skill={skill} />)
    : null;
    
    return skills === null ? (
        <div>Loading...</div>
    ) : (
        <div className="list">
            <header>
                <div>Skills List</div>
            </header>
                <BlockFlex>{renderedSkills}</BlockFlex>
        </div>
    );
};
