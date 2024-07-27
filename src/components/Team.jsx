// eslint-disable-next-line no-unused-vars
import React from 'react';

const Team = () => {
    const team = [
        {
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Chef Antonio",
            title: "Head Chef",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/21.jpg",
            name: "Emily Stone",
            title: "Pastry Chef",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/22.jpg",
            name: "James Lee",
            title: "Sous Chef",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/34.jpg",
            name: "Sophia Turner",
            title: "Restaurant Manager",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            name: "Michael Johnson",
            title: "Sommelier",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/40.jpg",
            name: "Olivia Brown",
            title: "Barista",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/56.jpg",
            name: "David Smith",
            title: "Line Cook",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            name: "Isabella Garcia",
            title: "Hostess",
        },
    ];

    return (
        <section className="py-14 bg-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-[#53ad97] text-3xl font-semibold sm:text-4xl">
                        Meet Our Culinary Team
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Our team of culinary experts is dedicated to providing you with the best dining experience. Meet the faces behind our delicious dishes.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {team.map((member, idx) => (
                            <li key={idx}>
                                <div className="w-20 h-20 mx-auto">
                                    <img
                                        src={member.avatar}
                                        className="w-full h-full rounded-full"
                                        alt={member.name}
                                    />
                                </div>
                                <div className="mt-2">
                                    <h4 className="text-[#53ad97] font-semibold sm:text-lg">{member.name}</h4>
                                    <p className="text-indigo-600">{member.title}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Team;
