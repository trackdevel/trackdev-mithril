import m from 'mithril';

function CourseList() {
    return {
        view: function (vnode) {
            let courses = vnode.attrs.courseCollection.map((course) =>
                (
                    <m.route.Link class="list-item" href={`/courses/${course.get('id')}`}>{course.get('name')}</m.route.Link>
                )
            );
            return (
                    <div class="card">
                        <div class="card-header">
                            <p class="card-header-title">Courses</p>
                        </div>
                        <div class="card-content">
                            <div class="list is-hoverable">{courses}</div>
                        </div>
                    </div>
            )
        }
    }
}


export default CourseList;
