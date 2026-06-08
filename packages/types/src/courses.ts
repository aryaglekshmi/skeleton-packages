export interface Lesson {
    id: string;
    title: string;
    titleAr?: string;
    duration: string;
    videoUrl: string;
    description: string;
    descriptionAr?: string;
};

export interface QuizQuestion {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
    explanationAr?: string;
};

export interface Chapter {
    id: string;
    title: string;
    lessons: Lesson[];
    quiz: QuizQuestion[];
};

export enum Level {
    BEGINNER = "Beginner",
    INTERMEDIATE = "Intermediate",
    ADVANCED = "Advanced"
}

export interface Course {
    id: string;
    title: string;
    instructor: string;
    description: string;
    tag: string;
    level: Level;
    progress: number;
    cover: string;
    chapters: Chapter[];
    enrollment: Enrollment;
};
export interface Enrollment {
    enrollmentType: EnrollmentType;
    assignedBy: string | null;
    assignedByRole: string | null;
    enrolledOn: string;
    mandatory: boolean;
    dueDate: string | null;
}

export enum EnrollmentType {
    SELF = "self",
    ASSIGNED = "assigned"
}