import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const teamMembers = [
	[
		{
			img: "https://cdn.easyfrontend.com/pictures/users/userM1.jpg",
			name: "Alicia Nicolson",
			bio: "Lorem ipsum dolor sit amet.",
			classes: "85 + ",
			from: "From The masters",
			lessons: "20 Lessons",
			text: "Average Per Class",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/users/userM16.jpg",
			name: "Alex Hales",
			bio: "The light creature divide him.",
			classes: "17 +",
			from: "From The masters",
			lessons: "27 Lessons",
			text: "Average Per Class",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/users/userM22.jpg",
			name: "Elecya Perry",
			bio: "Voluptas Possi numquam id ipsum",
			classes: "19+ ",
			from: "From The masters",
			lessons: "31 Lessons",
			text: "Average Per Class",
		},
	],
	[
		{
			img: "https://cdn.easyfrontend.com/pictures/users/userM3.jpg",
			name: "Alicia Nicolson",
			bio: "Lorem ipsum dolor sit amet.",
			classes: "85 + ",
			from: "From The masters",
			lessons: "20 Lessons",
			text: "Average Per Class",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/users/userM17.jpg",
			name: "Alex Hales",
			bio: "The light creature divide him.",
			classes: "17 +",
			from: "From The masters",
			lessons: "27 Lessons",
			text: "Average Per Class",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/users/userM4.jpg",
			name: "Elecya Perry",
			bio: "Voluptas Possi numquam id ipsum",
			classes: "19+ ",
			from: "From The masters",
			lessons: "31 Lessons",
			text: "Average Per Class",
		},
	],
];

const TeamMemberItem = ({ member }) => {
	return (
		<div className="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
			<div className="relative">
				<img
					className="w-full rounded-t-xl"
					src={member.img}
					alt={member.name}
				/>
				<div className="absolute bottom-7 w-full flex flex-col justify-center items-center z-10 text-white">
					<h4 className="text-2xl font-bold mb-2">{member.name}</h4>
					<p className="mb-2">{member.bio}</p>
					<a
						href="#!"
						className="px-5 py-2 bg-blue-600 text-white hover:bg-opacity-90 rounded-md mt-4"
					>
						View Details
					</a>
				</div>
			</div>
			<div className="flex p-4 md:p-6 mb-4">
				<div className="w-1/2 px-4 border-dashed border-r border-black dark:border-white text-end">
					<h5 className="text-xl font-medium mb-1">{member.classes}Classes</h5>
					<p className="">{member.from}</p>
				</div>
				<div className="w-1/2 px-4">
					<h5 className="text-xl font-medium mb-1">{member.lessons}</h5>
					<p className="">{member.text}</p>
				</div>
			</div>
		</div>
	);
};

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};

const JyotirlingaCarousal = () => {
	const [index, setIndex] = useState(0);
	const team = teamMembers[index];

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index <= 0 ? teamMembers.length - 1 : index - 1);
		} else {
			setIndex(index >= teamMembers.length - 1 ? 0 : index + 1);
		}
	};

	return (
		<section className="ezy__team15 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1]">
			<div className="container px-4 mx-auto">
				<h1 className="text-3xl md:text-[45px] font-bold mb-12">
					Featured Instructor
				</h1>
				<div className="relative">
					<div className="grid grid-cols-6 mt-12 gap-6">
						{team.map((member, j) => (
							<div className="col-span-6 md:col-span-3 lg:col-span-2" key={j}>
								<TeamMemberItem member={member} />
							</div>
						))}
					</div>

					<button
						className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-3 text-2xl bg-blue-600 bg-opacity-75 hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full z-10"
						onClick={() => handleControl("prev")}
					>
						<FontAwesomeIcon icon={faAngleLeft} />
					</button>
					<button
						className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-3 text-2xl bg-blue-600 bg-opacity-75 hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full z-10"
						onClick={() => handleControl("next")}
					>
						<FontAwesomeIcon icon={faAngleRight} />
					</button>
				</div>
			</div>
		</section>
	);
};
export default JyotirlingaCarousal ;
