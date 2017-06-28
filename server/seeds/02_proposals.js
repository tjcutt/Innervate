exports.seed = function(knex) {
  return knex('proposals').del()
    .then(() => {
      return knex('proposals').insert([{
        title:"Open-Source EEG Harness and Software",
        summary:"Open-source production of an EEG harness and analytical software that gives power and knowledge to the patient of their own mental health. Enables independent collection and diagnostics of brain wave data that will promote effective and accurate treatment",
        story:"I went to college in a town ridden by Adderall junkies striving to achieve their engineering dreams and neglecting their mental health. I seek to provide an easy-to-use and DIY method of measuring EEG brain waves so that patients can see real-time chemical changes in their brain.",
        votes:0,
        user_id:1
      }, {
        title:"Alert System and Breathing Monitor for Epileptic Infants",
        summary:"An breathing monitor that's tied to a mobile app that will alert you of irregular breathing when your baby is sleeping",
        story:"I am an EMT who is frequently called to houses with infant epileptic breathing issues and feel like this device would allow parents to sleep easier at night knowing the condition of their infant.",
        votes:0,
        user_id:3
      },{
        title:"Family-Protected Pill Box",
        summary:"A smartphone-controlled pill box to dispense patient medications at the correct time and dose.",
        story:"My father has mild cognitive impairment and this device would allow him to more easily control his medication and give him peace of mind with one less thing to remember on a daily basis.",
        votes:0,
        user_id:5
      },{
        title:"All-Natural Migraine Remedies Package",
        summary:"Don't want to swallow pills or go out to the grocery store to buy all the natural remedies? Here it is in one package so that you can get the rest you need without leaving the house.",
        story:"I live in the mountains so it will take me at least 40 minutes to get to a grocery store. I am not a fan of pharmaceuticals and would love to have a package that I can easily access whenever a migraine renders me incapacitated.",
        votes:0,
        user_id:6
      },{
        title:"Walking Metronome for Anxiety",
        summary: "A metronome with slight vibrations that will set the pace for walking, meditation, etc. that also includes a heart rate monitor to calibrate the speed and rate to slow the user down.",
        story: "My patients who struggle with ADHD or anxiety have a hard time going from 100 to 0, so a metronome that would slow them down slowly would be a useful tool.",
        votes: 0,
        user_id: 7
      },{
        title:"Memoryable",
        summary: "Memoryable is a supportive tool for people who care for those afflicted with various types of cognitive impairment or cognitive decline (dementia, Alzheimer's, Traumatic Brain Injury, etc.) Memoryable helps maintain a person's link to reality by providing an online photo album (which puts names and faces together), displaying the time, date and location of the guest, hosting to-do lists and other familiar activities such as a place to read the latest news and see a weather report.",
        story: "Created by Erica Epperson, inspired by the need she saw in her mother, Loreley, who had moderate dementia. Like so many elderly people, Loreley needed daily reminders of where she lived, what day it was, and who the people around her were, yet she was often silent in her confusion. This app was designed to help people like Loreley maintain their dignity and their memories at the same time.",
        votes: 0,
        user_id: 8
      }
      ]);
    });
};
