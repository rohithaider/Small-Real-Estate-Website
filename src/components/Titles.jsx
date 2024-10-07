export default function Titles({title,header,description,secDescription}){
    return (
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                {title}
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-black sm:text-4xl md:text-[40px] md:leading-[1.2]">
                {header}
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                {description}
              </p>
              {secDescription?<><br /><br /></>:""}
              <p className="text-base text-body-color dark:text-dark-6">
                {secDescription}
              </p>
            </div>
          </div>
        </div>
        
    );
}