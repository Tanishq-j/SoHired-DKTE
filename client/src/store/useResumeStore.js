import { create } from 'zustand';

const initialResumeData = {
    personalInfo: {
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        portfolio: "",
        summary: ""
    },
    experience: [],
    education: [],
    skills: [],
    activities: ""
};

const demoResumeData = {
    personalInfo: {
        fullName: "John Doe",
        email: "john@example.com",
        phone: "+1 555-0123",
        location: "New York, USA",
        linkedin: "linkedin.com/in/johndoe",
        portfolio: "johndoe.dev",
        summary: "Passionate Software Engineer with 5+ years of experience building scalable web applications. Adept at React, Node.js, and cloud technologies. Proven track record of improving application performance and team velocity."
    },
    experience: [
        {
            id: 'exp1',
            role: "Senior Frontend Engineer",
            company: "Tech Solutions Inc.",
            startDate: "2020-01",
            endDate: "",
            current: true,
            description: "• Led a team of 4 engineers to rebuild the core customer portal using React and Tailwind CSS.\n• Improved page load times by 40% through code splitting and lazy loading.\n• Mentored junior developers and established code review guidelines."
        },
        {
            id: 'exp2',
            role: "Web Developer",
            company: "Creative Agency",
            startDate: "2017-06",
            endDate: "2019-12",
            current: false,
            description: "• Developed responsive websites for 20+ clients using HTML, CSS, JavaScript, and WordPress.\n• Integrated third-party APIs for payment processing and analytics.\n• Collaborated closely with designers to ensure pixel-perfect implementations."
        }
    ],
    education: [
        {
            id: 'edu1',
            school: "University of Technology",
            degree: "Bachelor of Science in Computer Science",
            graduationDate: "2017-05",
            gpa: "3.8/4.0"
        }
    ],
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "Tailwind CSS", "Git", "REST APIs", "GraphQL"],
    activities: "• Open Source Contributor to multiple React libraries.\n• Volunteer programming tutor for local high school students."
};

export const useResumeStore = create((set) => ({
    resumeData: initialResumeData,
    currentStep: 1,
    totalSteps: 4,

    // Navigation
    nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, state.totalSteps) })),
    prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
    goToStep: (step) => set(() => ({ currentStep: Math.min(Math.max(step, 1), 4) })),

    // Data Updates
    updatePersonalInfo: (field, value) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            personalInfo: {
                ...state.resumeData.personalInfo,
                [field]: value
            }
        }
    })),

    addExperience: () => set((state) => ({
        resumeData: {
            ...state.resumeData,
            experience: [
                ...state.resumeData.experience, 
                { id: Date.now().toString(), role: "", company: "", startDate: "", endDate: "", current: false, description: "" }
            ]
        }
    })),

    removeExperience: (id) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.filter(exp => exp.id !== id)
        }
    })),

    updateExperience: (id, field, value) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.map(exp => 
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        }
    })),

    addEducation: () => set((state) => ({
        resumeData: {
            ...state.resumeData,
            education: [
                ...state.resumeData.education, 
                { id: Date.now().toString(), school: "", degree: "", graduationDate: "", gpa: "" }
            ]
        }
    })),

    removeEducation: (id) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.filter(edu => edu.id !== id)
        }
    })),

    updateEducation: (id, field, value) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.map(edu => 
                edu.id === id ? { ...edu, [field]: value } : edu
            )
        }
    })),

    updateSkills: (skillsArray) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            skills: skillsArray
        }
    })),

    updateActivities: (text) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            activities: text
        }
    })),

    loadDemoData: () => set(() => ({
        resumeData: demoResumeData,
        currentStep: 1
    })),

    resetData: () => set(() => ({
        resumeData: initialResumeData,
        currentStep: 1
    }))
}));
