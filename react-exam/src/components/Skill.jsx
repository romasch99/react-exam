// import {useNavigate} from "react-router-dom";
import { Card, CardItem, CardHeader, CardContent, CardNote} from "../ui/atoms/CardElements";

export const Skill = ({skill}) => {
    
    return (
        <Card>
            <CardItem>
                <CardHeader>{skill.title}</CardHeader>
            </CardItem>
            <CardContent>
                <CardNote>ID: {skill.id}</CardNote>
                <CardNote>DESCRIPTION: {skill.description}</CardNote>
            </CardContent>
        </Card>
    );
    
};
