var people = [{
    firstName: 'Greg',
    lastName: 'Abes'
}];

//First name can be reached in array by doing people[0].firstName
//Can add new properties to the array
people[0].secret = 'Won the Nobel Prize for Hospitality.'

//$('nav ul li') continues down list to find tags
//.toggle(); shows and hides (There is slide, fade, regular toggle)

$('#menuToggle').on('click', function() {
  $('nav ul').toggle({
    duration: 400
  });
});

$('a[data-remote=true]').on('click', function(ev) {
  ev.preventDefault();
  $.ajax({
    url: $(this).attr('href'),
    method: 'get',
    dataType: 'jsonp'

  });
});


function loadResults(data) {
  if (data.firstName) {
    people.push(data);
  }
  else if (data.people) {
    //makes a new array does not effect original
    people = people.concat(data.people);
  }
  listPeople();
};
//Take people array and put it in list items

function listPeople() {
  $('#people')
  .slideUp()
  .empty();

  //Clones the template and sets the id to empty string

  $.each(people, function(index, person) {
    var item = $('#template').clone().attr('id', '');

    var newContent = item.html()
    .replace('{{ person.firstName }}', person.firstName)
    .replace('{{ person.lastName }}', person.lastName)
    .replace('{{ person.secret }}', person.secret);

    item.html(newContent);

    item.removeClass('hidden');
    $('#people').append(item);
    $('#people').slideDown();
  });
}




listPeople();
