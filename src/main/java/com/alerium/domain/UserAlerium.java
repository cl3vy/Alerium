package com.alerium.domain;

import jakarta.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity(name = "UserAlerium")
@Table(name = "user_alerium")
public class UserAlerium {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "gender")
    private String gender;

    @Column(name = "birthday")
    private Date birthday;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "hash_password")
    private String hashPassword;

    @Column(name = "state_id")
    private String stateId;

    @Column(name = "is_resident")
    private Boolean isResident;

    @Column(name = "is_active")
    private Boolean isActive;

    @OneToOne
    private Room room;

    @Column(name = "is_deleted")
    private Boolean isDeleted;

    @OneToMany
    @JoinColumn(name = "user_id")
    private List<Request> requests;

    @Lob
    @Column(name = "contract_blob", columnDefinition = "LONGBLOB")
    private byte[] contractBlob;

    @Column(name = "role")
    private String role;

    @Column(name = "has_contract")
    private Boolean hasContract;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "guarantee")
    private Long guarantee;

    @Column(name = "first_payment_ammount")
    private Long firstPaymentAmmount;

    public UserAlerium() {}

    public UserAlerium(
        Long id,
        String name,
        String surname,
        String gender,
        Date birthday,
        String email,
        String phoneNumber,
        String hashPassword,
        String stateId,
        Boolean isResident,
        Boolean isActive,
        Room room,
        Boolean isDeleted,
        List<Request> requests,
        byte[] contractBlob,
        String role,
        Boolean hasContract,
        String paymentMethod,
        Long guarantee,
        Long firstPaymentAmmount
    ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.hashPassword = hashPassword;
        this.stateId = stateId;
        this.isResident = isResident;
        this.isActive = isActive;
        this.room = room;
        this.isDeleted = isDeleted;
        this.requests = requests;
        this.contractBlob = contractBlob;
        this.role = role;
        this.hasContract = hasContract;
        this.paymentMethod = paymentMethod;
        this.guarantee = guarantee;
        this.firstPaymentAmmount = firstPaymentAmmount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getHashPassword() {
        return hashPassword;
    }

    public void setHashPassword(String hashPassword) {
        this.hashPassword = hashPassword;
    }

    public String getStateId() {
        return stateId;
    }

    public void setStateId(String stateId) {
        this.stateId = stateId;
    }

    public Boolean getResident() {
        return isResident;
    }

    public void setResident(Boolean resident) {
        isResident = resident;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }

    public byte[] getContractBlob() {
        return contractBlob;
    }

    public void setContractBlob(byte[] contractBlob) {
        this.contractBlob = contractBlob;
    }

    public List<Request> getRequests() {
        return requests;
    }

    public void setRequests(List<Request> requests) {
        this.requests = requests;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Boolean getHasContract() {
        return hasContract;
    }

    public void setHasContract(Boolean hasContract) {
        this.hasContract = hasContract;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public Long getGuarantee() {
        return guarantee;
    }

    public void setGuarantee(Long guarantee) {
        this.guarantee = guarantee;
    }

    public Long getFirstPaymentAmmount() {
        return firstPaymentAmmount;
    }

    public void setFirstPaymentAmmount(Long firstPaymentAmmount) {
        this.firstPaymentAmmount = firstPaymentAmmount;
    }
}
