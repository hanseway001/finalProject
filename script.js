let userComments = [
    {
        name: 'WhySoSerious45',
        comment: 'Trying to decide a career path? Programming is the move. Change my mind.'
    },
    {
        name: 'asdf',
        comment: 'Money'
    },
    {
        name: 'EnoughSaid',
        comment: 'Preach!'
    },
    {
        name: 'guest1234',
        comment: 'Why would I change your mind? its the fastest growing industry out there...'
    },
    {
        name: 'TheMan',
        comment: 'Hard to argue with that'
    }
];

var  topComment = $('#parentComment');
var comments = $('#subCommentSection');

topComment.append('<div id="firstComment"><h1>' + userComments[0].name + '</h1><h2>' + userComments[0].comment + '</h2></div>' )
addComments();

function addComments(){
    comments.empty();
    $.each(userComments, function( index, value ) {
        comments.append(
            '<div id="subComment">' +
                '<div id="visibleContent">' +
                    '<img id="userImage" src="images/user.svg">' +
                    '<div id="subCommentContent">' +
                        '<div id="subCommentTop">' +
                            '<h1>' + value.name + '</h1>' +
                            '<div id="topRightSide">' +
                                '<div id="edit" class="button">Edit</div>' +
                                '<div id="delete" class="button">Delete</div>'+
                                '<div id="'+ index +'" class="noDisplay"></div>' +
                            '</div>' +
                        '</div>' +
                        '<h2 id="subCommentMiddle">' + value.comment + '</h2>' +
                        '<div id="subCommentBottom" class="noDisplay">' +
                            '<input id="editInput" class="editInput noDisplay" type="text" value="'+ value.comment+'">' +
                            '<div id="editSubmit" class="button noDisplay">Submit</div>' +
                        '</div>' +

                    '</div>' +
                '</div>' +

            '</div>'
        );
});
}    


//Add click to the submit button in the commentCreation form with javascript
var form = document.getElementById("commentCreation");

document.getElementById("submitComment").addEventListener("click", function () {
    var displayName = document.getElementById('displayName');
    var comment = document.getElementById('userComment');

    // alert('name: \'' + displayName.value + '\' comment: \'' + comment.value + '\'');
    userComments.unshift( {name:  displayName.value,  comment: comment.value });
    addComments();


});

// submit for the edit comment
$('#subCommentSection').on('click', '#editSubmit', function() {
    // console.log('edit me ');
    // console.log($(this).parent().parent().children().children().children('.noDisplay').attr('id'))
    let position = $(this).parent().parent().children().children().children('.noDisplay').attr('id');
    let changedComment = $(this).parent().children().val();
    console.log(changedComment);
    // let editedComment = $(this).parent().children().attr('value');
    // console.log(editedComment);
    // console.log($(this).parent().children('input').);
    userComments.splice(position, 1 ,{name: userComments[position].name, comment: changedComment}); 
    addComments();
});


//sub comment edit button
$('#subCommentSection').on('click', '#edit', function() {
    $(this).parent().parent().next().next().toggleClass('noDisplay');
    $(this).parent().parent().next().next().children().toggleClass('noDisplay');
});

$('#subCommentSection').on('click', '#delete', function() {
    let index = $(this).next().attr('id');
    userComments.splice(index, 1);
    addComments();
});