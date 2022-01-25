// import {useNavigate} from "react-router-dom";
import { Card, CardItem, CardHeader, CardContent, CardNote} from "../ui/atoms/CardElements";

export const Skill = ({skill}) => {
    
    return (
        <Card>
            <CardItem>
                <CardHeader>{skill.title}</CardHeader>
            </CardItem>
            <CardContent>
                <CardNote>{skill.description}</CardNote>
            </CardContent>
        </Card>
    );
    
};
