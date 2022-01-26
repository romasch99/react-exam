// import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {SkillsApi} from "../services/skills-api";
import {Input}  from "../ui/atoms/Input";
import {Field} from "../ui/molecules/Field";
import {Textarea} from "../ui/atoms/Textarea";
import {Label} from "../ui/atoms/Label";

import {Card, CardHeader, CardContent, CardButton, CardItemSmall} from "../ui/atoms/CardElements";


export const AddSkill = () => {
    const navigate = useNavigate();
    const {token} = useAuth();
    let errorObj = null;
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData(e.target);
            const [title, description] = data.values();
            const res = await SkillsApi.add({title, description}, token);

            if (res.err) throw new Error(res.err);

            navigate("/home");
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
                        <Field label= "Title" name="title" placeholder="Title" type="text" required />
                    </CardItemSmall>
                    <CardItemSmall>
                        <Label name="description">Description</Label>
                        <Textarea name="description" placeholder="Description" required />
                    </CardItemSmall>
                    <CardItemSmall>
                        <Field label= "Description" name="description" placeholder="Description" type="textarea" required />
                    </CardItemSmall>
                    <CardItemSmall>
                        <CardButton inputColor = "#138d83d7" inputWidht = "10%" type="submit">Add</CardButton>
                    </CardItemSmall>
                </form>
                {errorObj}    
            </CardContent>
        </Card>
    );
};
