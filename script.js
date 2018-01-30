function pangram(str)
{
  var sente;
  var alpha = 'qwertyuiopasdfghjklzxcvbnm';

  
  if(str.length >= 26)
  {
    for(var i = 0; i < str.length; i++)
    {
      var let = str.trim().toLowerCase();
      if(let.indexOf(alpha.charAt(i)) == -1)
      {
        return false;
       
      }
    }
  }
  return true;
}
document.write(pangram("the quick brown fox jumps over the lazy dog"));