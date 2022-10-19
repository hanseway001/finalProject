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
        name: 'WhySoSerious45',
        comment: 'Trying to decide a career path? Programming is the move. Change my mind.'
    },
    {
        name: 'WhySoSerious45',
        comment: 'Trying to decide a career path? Programming is the move. Change my mind.'
    }
];

// $(ParentComment).append(<h1></h1>);


var  topComment = $('#parentComment');
var comments = $('#subCommentSection');

topComment.append('<div id="firstComment"><h2>' + userComments[0].name + '</h2><h1>' + userComments[0].comment + '</h1></div>' )
addComments();

function productDelete(ctl) {
    console.log("stupid");
    $(ctl).parents("tr").remove();
}


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
                            '</div>' +
                        '</div>' +
                       
                        '<h2 id="subCommentMiddle">' + value.comment + '</h2>' +
                        

                        '<div id="subCommentBottom" class="noDisplay">' +
                            '<input class="editInput">' +
                            '<div class="button">Submit</div>' +
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

// sub comment delete button
$('#delete').click(function(index) {
    console.log("index" + index);
});

// $('#delete".click('click', function() {
    // console.log("delete me");
// });

//sub comment edit button
$('#subCommentSection').on('click', '#edit', function() {
    // console.log('edit me ');
    $(this).parent().parent().next().next().toggleClass('noDisplay');
    // console.log($(this).parent().parent().next().next().attr('id'));
});