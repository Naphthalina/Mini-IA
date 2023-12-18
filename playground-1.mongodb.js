
db.patient.insertOne({
    "surname":"PatientSurname",
    "otherNames":"PatientOtherNames",
    "gender":"Male/Female/Other",
    "phone":"PatientPhoneNumber",
    "adress":"ResidentialAdress",
    "emergencyContact":{
        "name":"EmergencyContactName",
        "phone":"EmergencyContactPhone",
        "relationship":"RelationWithPatient",
    }

});

db.encounters.insertOne({
    "patientId": ObjectId("patient_id"),
    "datetime";
    ISODate("EncounterDateTime"),
    "type": "Emergency/OPD/SpecialistCare"
});