import ModelBuilder from './modelBuilder';

const CourseModel = ModelBuilder('/courses', 'Course', {
    id: null,
    name: null,
    ownerId: null
});

export default CourseModel;
