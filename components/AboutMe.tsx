import Image from 'next/image';
import { socialMedia, aboutMe } from "@/data";

const AboutMe = () => {
    return (
        <section id='about' className='py-10 text-white'>
            <div className='text-center mt-8'>
                <h3 className='text-4xl font-semibold'>About <span className='text-blue-800 font-semibold'>Me</span></h3>
            </div>
            <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                <div className='flex-1 p-2'>
                    <div className='text-gray-300 my-3'>
                        <p className='text-justify leading-7'>
                            As a software developer, I enjoy transforming ideas into innovative digital solutions that meet the needs and expectations of users and clients. I have been working autonomously since August 2022, focusing on web development using technologies such as React, Next.js, Vite, Node.js, Angular, TypeScript, and Python.
                            <br /><br />
                            I graduated as a Systems Analyst at Faculdade Pitágoras, where I learned the fundamentals of software engineering, database management, and cloud technologies. I also have experience with HTML, CSS, Git, GraphQL, Firebase, MongoDB, PostgreSQL, Cypress, and Jest, using them to create responsive and interactive web applications. I have basic knowledge of UI/UX design and apply this in my work with tools like Figma. I am proficient in English, with excellent communication and teamwork skills.
                        </p>
                    </div>
                </div>

                <div className='flex-1 flex flex-col justify-center items-center'>
                    <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm mb-4'>
                    {aboutMe.map((item, index) => (
                        <img 
                        key={index}  // Adicione a prop "key"
                        src={item.image}  alt="me Paulo" className='w-full object-cover rounded-xl'
                        />
                    ))}
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        {socialMedia.map((info) => (
                            <div
                                key={info.id}
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <a href={info.link}>
                                    <Image src={info.img} alt="icons" width={20} height={20} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
