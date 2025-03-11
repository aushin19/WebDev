import { ChangeEvent, FormEvent, useState } from "react"

type contactFormType = {
    username: string,
    id: number,
    mobile: number
}

const ContactForm = () => {
    const [data, setData] = useState<contactFormType>({
        username: '',
        id: 0,
        mobile: 0
    });

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, value } = e.target as HTMLInputElement;

        setData((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Username"
                name="username"
                value={data.username}
            />
            <input
                type="number"
                placeholder="ID"
                name="id"
                value={data.id}
            />
            <input
                type="number"
                placeholder="Mobile"
                name="mobile"
                value={data.mobile}
            />
            <button type="submit">Submit</button>

            <section>
                <p>Username: {data.username}</p>
                <p>ID: {data.id}</p>
                <p>Mobile: {data.mobile}</p>
            </section>
        </form>
    );
}

export default ContactForm;
