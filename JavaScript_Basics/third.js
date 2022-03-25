'use strict'

var school = {
    count_classes: 65,
    students_in_class: 30,

    add_classes: function(classes) {
        return this.count_classes += classes;
    },
    show_about: function() {
            console.log("This is " + this.specialization + " " + this.name + " school. We have " + this.count_classes*this.students_in_class
            + " students in " + this.count_classes + ' classes. The school has several class groups: ' + this.class_flow);
    },
    set property(student_in_class) {
        this.students_in_class = student_in_class;
    }
};

Object.defineProperty(school, 'name', {
    value: 'Denis',
    writable: false,
});

Object.defineProperty(school, 'specialization', {
    value: 'liceum',
    writable: false,
});

Object.defineProperty(school, 'class_flow', {
    value: ['a','b','c'],
    writable: false,
});

school.show_about();
school.add_classes(5);
school.show_about();
school.property = 45;
school.show_about();