import Adminfooter from "@/components/Adminfooter";
import AdminHeader from "@/components/Adminheader";

export default function AdminLayout({children , }){
    return (
        <section>
            <AdminHeader/>
            {children}
            <Adminfooter/>
        </section>
    )
}