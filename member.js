function skillsMember() {
  return {
    get: function() {
      return {
        name: 'John Doe',
        skills: ['coding', 'teaching']
      };
    }
  };
}