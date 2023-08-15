let mood = (prompt('Вкажіть ваш настрій'));

switch (mood) {
    case 'щасливий': alert('😀');
        break;
    case 'сумний': alert('😢');
        break;
    case 'злюсь': alert('😕'); 
        break;
    case null: alert('❔') ;
        break;

    default: alert("No");       
}
                                                        1