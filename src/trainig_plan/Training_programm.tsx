import React from "react";
import Training_program_datal from "./Training_program_datal";
import Training_programm_result from "./Training_programm_result";
import Training_preload from "./Training_preload";

function Training_programm(props: any) {
  const targetIds = [
    "7241495701419554335",
    "7065180783358906111",
    "7241495702062648817",
    "7065181186165255885",
    "7241494171785651793",
  ];

  // Массивы для хранения первых найденных совпадений и остальных мероприятий
  const targetEventsMap = new Map<string, any>();
  const otherEvents: any[] = [];
  const displayedTrainingIds = new Set<string>(); // Set для хранения идентификаторов отображаемых тренингов

  // Флаг для отслеживания найденных целевых ID
  const foundTargetIds = new Set<string>();

  for (const event of props.events) {
    if (
      targetIds.includes(event.trainingProgramm) &&
      !foundTargetIds.has(event.trainingProgramm)
    ) {
      targetEventsMap.set(event.trainingProgramm, event);
      foundTargetIds.add(event.trainingProgramm);
      displayedTrainingIds.add(event.trainingProgramm); // Добавляем ID отображаемого тренинга
    } else if (!targetIds.includes(event.trainingProgramm)) {
      otherEvents.push(event);
    }
  }

  // Создаем массив firstFoundEvents в порядке targetIds
  const firstFoundEvents = targetIds
    .map((id) => targetEventsMap.get(id))
    .filter((event) => event !== undefined);

  return (
    <div className="training_programm">
      {props.preloadCard ? (
        <>
          {firstFoundEvents.map((event: any) => (
            <Training_program_datal
              key={event.id} // добавляем ключ для каждого элемента
              trainingProgramm={event.trainingProgramm}
              nameEvent={event.nameEvent}
              dataEventModal={event.dataEventModal}
              isAssist={event.isAssist}
              searchText={props.searchText}
              highlightText={props.highlightText}
            />
          ))}
        </>
      ) : (
        Array.from({ length: 6 }).map((_, index) => (
          <Training_preload key={index} />
        ))
      )}
    </div>
  );
}

export default Training_programm;
