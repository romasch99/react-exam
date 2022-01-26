import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {Skill} from "../components/Skill";
import {SkillsApi} from "../services/skills-api";
import {BlockFlex} from "../ui/atoms/Block"

export const Home = () => {
    const {token} = useAuth();
    const [skills, setSkills] = useState();
    const {state} = useLocation();
    
    const fetchSkills = async () => {
        const res = await SkillsApi.getAll(token);
        setSkills(res);
    };

    const addSkill = (skill) => {
        setSkills((prevState) => [...prevState, skill]);
    };
    
    useEffect(() => {
        fetchSkills();
    }, []);
    
    useEffect(() => {
        if (!state) return;

        if (state.added) {
            addSkill(state.added);
        }
    }, [state]);
    
    const renderedSkills = !!skills
    ? skills.map((skill) => <Skill key={skill.id} skill={skill} />)
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
