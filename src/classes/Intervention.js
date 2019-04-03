export class Intervention {

    reference
    startDate
    endDate
    address
    city
    zip
    technicianFirstName
    technicianLastName
    telephoneNumber
    type
    price
    status

    constructor(rawIntervention) {

        this.reference = rawIntervention.reference
        this.startDate = rawIntervention.start_date.slice(0,10)
        this.endDate = rawIntervention.end_date.slice(0,10)
        this.address = rawIntervention.address
        this.city = rawIntervention.city
        this.zip = rawIntervention.zip
        this.technicianFirstName = rawIntervention.technician_first_name
        this.technicianLastName = rawIntervention.technician_last_name
        this.telephoneNumber = rawIntervention.telephone_number
        this.type = rawIntervention.type
        this.price = rawIntervention.price
        this.status = rawIntervention.status
    }

    static buildFromForm(rawData){
        console.log('row_data', rawData)
        return {
            reference: rawData.reference,
            start_date: rawData.startDate,
            end_date: rawData.endDate,
            address: rawData.address,
            city: rawData.city,
            zip: rawData.zip,
            technician_first_name: rawData.technicianFirstName,
            technician_last_name: rawData.technicianLastName,
            telephone_number: rawData.telephoneNumber,
            type: rawData.type,
            price: rawData.price,
            status: rawData.status,
        }
    }

    getAbstractIntervention() {
        return {
            reference: this.reference,
            startDate: this.startDate,
            endDate: this.endDate,
            address: this.address,
            city: this.city,
            technicianLastName: this.technicianLastName,
            type: this.type,
            price: this.price,
            status: this.status
        }
    }

    getFullIntervention(){
        return {
        reference: this.reference,
        startDate: this.startDate,
        endDate: this.endDate,
        address: this.address,
        city: this.city,
        zip: this.zip,
        technicianFirstName: this.technicianFirstName,
        technicianLastName: this.technicianLastName,
        telephoneNumber: this.telephoneNumber,
        type: this.type,
        price: this.price,
        status: this.status
        }
    }
}