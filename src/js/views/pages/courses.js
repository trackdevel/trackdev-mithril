import m from 'mithril';
import {ps} from '../../pubsub';
import BasePage from './base';
import CoursesViewList from '../components/course/courseList';
import CourseCollection from '../../models/courseCollection';


export default function Courses() {

    let courseCollection = CourseCollection()

    courseCollection.get()
        .catch((e) => ps.publish('error.courseList', e))
        .finally(() => m.redraw())

    return BasePage(CoursesViewList, {courseCollection})
}
