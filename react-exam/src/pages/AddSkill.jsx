import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {useState} from "react";
import {SkillsApi} from "../services/skills-api";
import {Field} from "../ui/molecules/Field";
import {Textarea} from "../ui/atoms/Textarea";
import {Label} from "../ui/atoms/Label";

import {Card, CardHeader, CardContent, CardButton, CardItemSmall} from "../ui/atoms/CardElements";


export const AddSkill = () => {
    const navigate = useNavigate();
    const {token} = useAuth();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    let errorObj = null;
    
    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const onDescription = (e) => {
        setDescription(e.target.value);
    };
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData(e.target);
            const [title, description] = data.values();
            const res = await SkillsApi.add({title, description}, token);

            if (res.err) throw new Error(res.err);

            navigate("/");
        } catch (error) {
            console.error(error);
            errorObj = <CardItemSmall><p  style={{color: "red"}}>Eror: {error}</p></CardItemSmall>;
        }
    };

    return (
        <Card width = "80%">
            <CardHeader>Add skill</CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <CardItemSmall>
                        <Field label= "Title:" onChange={onTitleChange} name="title" placeholder="Title" type="text" required />
                    </CardItemSmall>
                    <CardItemSmall>
                        <Label name="description">Description:</Label>
                        <Textarea onChange={onDescription} name="description" placeholder="Description" required />
                    </CardItemSmall>
                    <CardItemSmall>
                        <CardButton inputColor =  {!title || !description ? "#ebedef" : "#138d83d7"}  inputWidht = "10%" type="submit" disabled={!title || !description}>Add</CardButton>
                    </CardItemSmall>
                </form>
                {errorObj}    
            </CardContent>
        </Card>
    );
};
