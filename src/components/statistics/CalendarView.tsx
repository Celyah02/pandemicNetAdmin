
export function CalendarView() {
  // Days of the week
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  
  // Generate the calendar days (March 2023)
  const generateCalendarDays = () => {
    const days = [];
    // First few days might be empty (assuming March 2023 started on a Wednesday)
    for (let i = 0; i < 3; i++) {
      days.push({ day: "", isHighlighted: false });
    }
    
    // Actual days of the month
    for (let i = 1; i <= 31; i++) {
      // Mark some days as highlighted for demonstration
      const isHighlighted = [10, 15, 20, 25].includes(i);
      days.push({
        day: i,
        isHighlighted,
        isToday: i === 24
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  
  return (
    <div className="mt-4">
      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 text-center mb-1">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-xs text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`
              text-center text-xs h-7 w-7 flex items-center justify-center rounded-full
              ${day.isToday ? 'bg-blue-500 text-white' : day.isHighlighted ? 'bg-blue-100' : ''}
              ${!day.day ? 'invisible' : ''}
            `}
          >
            {day.day}
          </div>
        ))}
      </div>
    </div>
  );
}
